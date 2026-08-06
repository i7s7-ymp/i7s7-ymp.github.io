interface GitHubUserApi {
  name?: string | null;
  login?: string | null;
  company?: string | null;
  location?: string | null;
  hireable?: boolean | null;
  created_at?: string | null;
}

interface DisplayItem {
  k: string;
  v: string;
  cls: string;
}

const colorByKey = {
  Name: 'text-accent-gold',
  Company: 'text-accent-coral',
  Location: 'text-accent-cyan',
  Hireable: 'text-accent-neon',
  Since: 'text-accent-pink',
} as const;

function escapeHtml(value: string): string {
  const entries: Array<[string, string]> = [
    ['&', '&amp;'],
    ['<', '&lt;'],
    ['>', '&gt;'],
    ['"', '&quot;'],
    ['\u0027', '&#39;'],
  ];
  const map = Object.fromEntries(entries) as Record<string, string>;
  return value.replace(/[&<>"']/g, char => map[char] ?? char);
}

async function refreshProfile(): Promise<void> {
  const container = document.getElementById('ghProfileItems');
  if (!container) return;

  try {
    const response = await fetch('https://api.github.com/users/i7s7-ymp', {
      headers: { 'User-Agent': 'i7s7-ymp-astro-site' },
    });
    if (!response.ok) return;

    const user = (await response.json()) as GitHubUserApi;
    const items: DisplayItem[] = [];
    const push = (k: string, v: string | number | null | undefined, cls: string): void => {
      if (v) items.push({ k, v: String(v), cls });
    };

    push('Name', user.name ?? user.login, colorByKey.Name);
    push('Company', user.company, colorByKey.Company);
    push('Location', user.location, colorByKey.Location);
    if (typeof user.hireable === 'boolean') {
      push('Hireable', user.hireable ? 'Yes' : 'No', colorByKey.Hireable);
    }
    if (user.created_at) {
      push('Since', new Date(user.created_at).getFullYear(), colorByKey.Since);
    }

    container.innerHTML = items
      .map(
        item =>
          `<div class="flex justify-between"><span class="text-primary-300">${escapeHtml(item.k)}:</span><span class="${escapeHtml(item.cls)}">${escapeHtml(item.v)}</span></div>`
      )
      .join('');
    container.dataset.source = 'live';

    const sourceLabel = document.getElementById('ghProfileSourceLabel');
    if (sourceLabel) sourceLabel.textContent = 'GitHub API (live)';

    const liveDot = document.getElementById('ghProfileLiveDot');
    if (liveDot) {
      liveDot.classList.add('animate-pulse');
      liveDot.classList.remove('bg-accent-neon/70');
      liveDot.classList.add('bg-accent-cyan');
    }
  } catch {
    // Ignore network/runtime errors and keep fallback content.
  }
}

export function initHomeProfile(): void {
  const start = (): void => {
    void refreshProfile();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }

  document.addEventListener('astro:page-load', start);
}
