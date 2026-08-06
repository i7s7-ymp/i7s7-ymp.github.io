let escapeHandlerBound = false;

function attachChartInteractions(chartSelector: string): void {
  const chartEl = document.querySelector<HTMLElement>(chartSelector);
  if (!chartEl || chartEl.dataset.interactionsBound === '1') return;

  chartEl.dataset.interactionsBound = '1';

  const bars = Array.from(chartEl.querySelectorAll<HTMLElement>('.bar-box'));
  const labels = Array.from(chartEl.querySelectorAll<HTMLElement>('.bar-labels .x-label'));

  const activate = (id: string | null): void => {
    bars.forEach(bar => bar.classList.toggle('active', !!id && bar.dataset.id === id));
    labels.forEach(label => {
      const isActive = !!id && label.dataset.id === id;
      label.classList.toggle('active', isActive);
      label.classList.toggle('glow', isActive);
    });
  };

  const clear = (): void => activate(null);

  bars.forEach(bar => {
    const id = bar.dataset.id ?? '';
    const hit = bar.querySelector<HTMLElement>('.bar-hit');
    if (hit) hit.tabIndex = 0;

    ['mouseenter', 'focus'].forEach(eventName =>
      bar.addEventListener(eventName, () => activate(id))
    );
    ['mouseleave', 'blur'].forEach(eventName => bar.addEventListener(eventName, clear));

    bar.addEventListener('click', () => activate(id));
    bar.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activate(id);
      }
      if (event.key === 'Escape') clear();
    });
  });

  labels.forEach(label => {
    const id = label.dataset.id ?? '';

    ['mouseenter', 'focus'].forEach(eventName =>
      label.addEventListener(eventName, () => activate(id))
    );
    ['mouseleave', 'blur'].forEach(eventName => label.addEventListener(eventName, clear));

    label.addEventListener('click', () => activate(id));
    label.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activate(id);
      } else if (event.key === 'Escape') {
        clear();
      }
    });
  });
}

function bindSupportChartInteractions(): void {
  attachChartInteractions('.pchart');

  if (!escapeHandlerBound) {
    escapeHandlerBound = true;
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        document
          .querySelectorAll<HTMLElement>('.badge-pill.active, .badge-pill.glow, .bar-box.active')
          .forEach(el => {
            el.classList.remove('active', 'glow');
          });
      }
    });
  }
}

export function initSupportChartInteractions(): void {
  const start = (): void => {
    bindSupportChartInteractions();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }

  document.addEventListener('astro:page-load', start);
}
