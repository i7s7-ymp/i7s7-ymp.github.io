interface ChatHistoryMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface GradioParameter {
  name?: string;
}

interface GradioEndpointSchema {
  parameters?: GradioParameter[];
}

interface GradioSchema {
  endpoints?: Record<string, GradioEndpointSchema>;
}

interface GradioClient {
  view_api?: () => Promise<unknown>;
  predict: (_endpoint: string, _payload: unknown) => Promise<unknown>;
}

interface GradioModule {
  Client: {
    connect: (_url: string) => Promise<GradioClient>;
  };
}

const GRADIO_SPACE_URL =
  'https://genai-app-chatymp-1-1756129226295-304438944339.us-central1.run.app/';

let gradioClientPromise: Promise<GradioClient | null> | null = null;
let gradioSchema: GradioSchema | null = null;
let globalLayoutListenersBound = false;
const dynamicImport = new Function('url', 'return import(url);') as (
  _url: string
) => Promise<unknown>;

const conversationHistory: ChatHistoryMessage[] = [];

function adjustChatbotLayoutHeight(): void {
  const chatbotLayout = document.getElementById('chatbot-layout');
  const chatContainer = document.getElementById('chat-container');
  if (!chatbotLayout) return;

  const rect = chatbotLayout.getBoundingClientRect();
  const target = Math.max(320, window.innerHeight - rect.top - 8);
  chatbotLayout.style.height = `${target}px`;
  chatbotLayout.classList.add('chatbot-layout--fixed');
  if (chatContainer) chatContainer.style.height = `${target}px`;
}

function scheduleAdjustments(): void {
  adjustChatbotLayoutHeight();
  window.setTimeout(adjustChatbotLayoutHeight, 150);
  window.setTimeout(adjustChatbotLayoutHeight, 400);
}

function bindGlobalLayoutListeners(): void {
  if (globalLayoutListenersBound) return;
  globalLayoutListenersBound = true;

  window.addEventListener('load', scheduleAdjustments);
  window.requestAnimationFrame(scheduleAdjustments);
  window.addEventListener('resize', adjustChatbotLayoutHeight);
  window.addEventListener('orientationchange', adjustChatbotLayoutHeight);
  window.addEventListener('visibilitychange', () => {
    if (!document.hidden) scheduleAdjustments();
  });

  document.addEventListener('astro:page-load', scheduleAdjustments);
}

async function loadGradio(): Promise<GradioClient | null> {
  if (!gradioClientPromise) {
    gradioClientPromise = (async () => {
      try {
        const mod = (await dynamicImport('https://esm.sh/@gradio/client')) as GradioModule;
        return await mod.Client.connect(GRADIO_SPACE_URL);
      } catch {
        return null;
      }
    })();
  }

  return gradioClientPromise;
}

function flattenValues(input: unknown): unknown[] {
  if (!Array.isArray(input)) return [input];
  return input.flatMap(flattenValues);
}

function pickModelValue(result: unknown): string {
  const root =
    typeof result === 'object' && result !== null && 'data' in result
      ? (result as { data?: unknown }).data
      : result;

  if (Array.isArray(root)) {
    try {
      const strings = flattenValues(root).filter(
        (value): value is string => typeof value === 'string'
      );
      if (strings.length) return strings.join('').replace(/\n/g, '\n');
    } catch {
      // Ignore flatten errors and continue to generic extraction.
    }
  }

  const candidates = Array.isArray(root) ? root : [root];
  for (const item of candidates) {
    if (item == null) continue;
    if (typeof item === 'string' && item.trim()) return item;
    if (typeof item === 'object') {
      const data = item as Record<string, unknown>;
      for (const key of ['text', 'answer', 'output', 'response', 'generated_text', 'content']) {
        const value = data[key];
        if (typeof value === 'string' && value.trim()) return value;
      }
    }
  }

  try {
    return JSON.stringify(root);
  } catch {
    return String(root);
  }
}

async function sendToModel(userMessage: string): Promise<string> {
  const client = await loadGradio();
  if (!client) return 'モデルへ接続できませんでした (一時的な問題)。';

  if (!gradioSchema && client.view_api) {
    try {
      const schema = await client.view_api();
      if (schema && typeof schema === 'object') {
        gradioSchema = schema as GradioSchema;
      }
    } catch {
      // Ignore schema fetch failures.
    }
  }

  const endpoint = '/chat';
  const params = gradioSchema?.endpoints?.[endpoint]?.parameters;
  const inputNames = Array.isArray(params)
    ? params.map(param => param.name).filter((name): name is string => Boolean(name))
    : [];

  const base = userMessage;
  const historySnapshot = [...conversationHistory];

  const messageObjects: Record<string, unknown>[] = [
    { text: base },
    { text: base, mime_type: 'text/plain' },
    { message: base },
    { prompt: base },
  ];

  if (inputNames.length === 1) {
    const key = inputNames[0];
    if (key) messageObjects.push({ [key]: { text: base } });
  }

  const historyArray = historySnapshot.map(item => ({ role: item.role, content: item.content }));

  const attempts: unknown[] = [
    ...messageObjects.map(message => [message, historyArray]),
    ...messageObjects.map(message => [message, []]),
  ];

  for (const payload of attempts) {
    try {
      const result = await Promise.race<unknown>([
        client.predict(endpoint, payload),
        new Promise<never>((_, reject) => {
          window.setTimeout(() => reject(new Error('timeout:18s')), 18000);
        }),
      ]);
      return pickModelValue(result);
    } catch {
      // try next payload shape
    }
  }

  return '推論エラーが発生しました。';
}

function now(): string {
  return new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' });
}

function escapeText(text: string): string {
  return text.replace(/[&<>]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[char] ?? char);
}

function createWrapper(): HTMLDivElement {
  const wrap = document.createElement('div');
  wrap.className = 'flex items-start space-x-3';
  return wrap;
}

function renderUserBubble(text: string): HTMLDivElement {
  const wrap = createWrapper();
  wrap.innerHTML = `<div class='flex-1 flex justify-end'><div><div class='rounded-2xl bg-gradient-to-r from-primary-500 to-accent-pink p-3 backdrop-blur-sm'><p class='text-white'></p></div><p class='text-xs text-primary-400 mt-1 text-right'>${now()}</p></div></div><div class='flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-accent-cyan to-accent-neon'><span class='text-sm'>👤</span></div>`;
  const message = wrap.querySelector('p.text-white');
  if (message) message.textContent = text;
  return wrap;
}

function renderAssistantPending(id: string): HTMLDivElement {
  const wrap = createWrapper();
  wrap.innerHTML = `<div id='${id}' class='flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-pink'><span class='text-sm'>🎯</span></div><div class='flex-1'><div class='rounded-2xl bg-primary-600/20 p-3 backdrop-blur-sm'><p class='text-primary-300 animate-pulse'>生成中...</p></div><p class='text-xs text-primary-400 mt-1'>${now()}</p></div>`;
  return wrap;
}

function replaceAssistantBubble(id: string, content: string): void {
  const node = document.getElementById(id);
  if (!node) return;

  const parent = node.parentElement;
  if (!parent) return;

  parent.innerHTML = `<div class='flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-pink'><span class='text-sm'>🎯</span></div><div class='flex-1'><div class='rounded-2xl bg-primary-600/20 p-3 backdrop-blur-sm'><p class='text-white whitespace-pre-line'></p></div><p class='text-xs text-primary-400 mt-1'>${now()}</p></div>`;
  const body = parent.querySelector('p.text-white');
  if (body) body.textContent = content;
}

function normalizeOutput(response: unknown): string {
  if (typeof response !== 'string') return String(response ?? '');

  const trimmed = response.trim();
  if (trimmed.startsWith('[')) {
    try {
      const parsed = JSON.parse(trimmed) as unknown;
      const strings = flattenValues(parsed).filter(
        (value): value is string => typeof value === 'string'
      );
      if (strings.length) return strings.join('').replace(/\n/g, '\n');
    } catch {
      // keep raw response
    }
  }

  return response.replace(/\n/g, '\n');
}

function isBlankInput(value: string): boolean {
  return !value || !value.replace(/[\s\u3000]/g, '');
}

function bindChatHandlers(): void {
  const layout = document.getElementById('chatbot-layout');
  if (!layout || layout.dataset.runtimeBound === '1') return;
  layout.dataset.runtimeBound = '1';

  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input') as HTMLInputElement | null;
  const sendButton = document.getElementById('send-btn') as HTMLButtonElement | null;

  if (!chatMessages || !chatInput || !sendButton) return;

  const appendNode = (node: HTMLElement): void => {
    chatMessages.appendChild(node);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  const sendQueue: string[] = [];
  let processing = false;

  const setUiBusy = (busy: boolean): void => {
    sendButton.disabled = busy;
    chatInput.disabled = busy;
  };

  const handleSendCore = async (raw: string): Promise<void> => {
    const text = raw;
    conversationHistory.push({ role: 'user', content: text });
    appendNode(renderUserBubble(escapeText(text)));

    const typingId = `typing-${crypto.randomUUID()}`;
    appendNode(renderAssistantPending(typingId));

    let response = '';
    try {
      response = await sendToModel(text);
    } catch {
      response = 'エラーが発生しました。';
    }

    const normalized = normalizeOutput(response);
    replaceAssistantBubble(typingId, normalized);
    conversationHistory.push({ role: 'assistant', content: normalized });
  };

  const processQueue = async (): Promise<void> => {
    if (processing) return;

    processing = true;
    setUiBusy(true);

    while (sendQueue.length) {
      const text = sendQueue.shift();
      if (typeof text === 'string') {
        await handleSendCore(text);
      }
    }

    setUiBusy(false);
    processing = false;
  };

  const enqueueSend = (text: string): void => {
    sendQueue.push(text);
    void processQueue();
  };

  const handleSend = (): void => {
    const value = chatInput.value;
    if (isBlankInput(value)) return;

    const toSend = value.trim();
    chatInput.value = '';
    enqueueSend(toSend);
  };

  sendButton.addEventListener('click', handleSend);
  chatInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      if (event.shiftKey) return;
      event.preventDefault();
      handleSend();
    }
  });

  document.querySelectorAll<HTMLButtonElement>('.quick-question').forEach(button => {
    button.addEventListener('click', () => {
      chatInput.value = button.textContent ?? '';
      handleSend();
    });
  });
}

export function initChatbotRuntime(): void {
  bindGlobalLayoutListeners();

  const start = (): void => {
    scheduleAdjustments();
    bindChatHandlers();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }

  document.addEventListener('astro:page-load', start);
}
