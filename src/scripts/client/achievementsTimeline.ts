type TimelineDebugWindow = Window & {
  __selectYear?: (_year: string | null) => void;
};

function computeAndLockPanelHeights(panels: HTMLElement[]): void {
  if (!panels.length) return;

  const states = panels.map(panel => panel.classList.contains('hidden'));
  panels.forEach(panel => panel.classList.remove('hidden'));

  let maxHeight = 0;
  panels.forEach(panel => {
    const panelHeight = panel.scrollHeight;
    if (panelHeight > maxHeight) maxHeight = panelHeight;
  });

  panels.forEach((panel, index) => {
    if (states[index]) panel.classList.add('hidden');
    panel.style.minHeight = `${maxHeight}px`;
  });
}

function attachResponsiveRecalc(panels: HTMLElement[], delay = 180): void {
  let timer: ReturnType<typeof setTimeout> | undefined;
  window.addEventListener('resize', () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => computeAndLockPanelHeights(panels), delay);
  });
}

function mountTimeline(): void {
  let attempt = 0;

  const tryInit = (): void => {
    attempt += 1;

    const markers = Array.from(document.querySelectorAll<HTMLElement>('.year-node'));
    const panels = Array.from(document.querySelectorAll<HTMLElement>('[data-year-panel]'));

    if (!markers.length || !panels.length) {
      if (attempt < 10) {
        setTimeout(tryInit, 50 * attempt);
      }
      return;
    }

    const selectYear = (year: string | null): void => {
      if (!year) return;

      let activeEl: HTMLElement | undefined;
      for (const marker of markers) {
        const active = marker.getAttribute('data-year') === year;
        marker.classList.toggle('is-active', active);
        marker.setAttribute('aria-pressed', active ? 'true' : 'false');
        if (active) activeEl = marker;
      }

      panels.forEach(panel => {
        const active = panel.getAttribute('data-year-panel') === year;
        panel.classList.toggle('hidden', !active);
        panel.setAttribute('aria-hidden', active ? 'false' : 'true');
        if (active) panel.style.removeProperty('display');
        else panel.style.display = 'none';
      });

      if (activeEl !== undefined) {
        activeEl.classList.remove('activating');
        void activeEl.offsetWidth;
        activeEl.classList.add('activating');
        activeEl.addEventListener('animationend', () => activeEl?.classList.remove('activating'), {
          once: true,
        });
      }

      requestAnimationFrame(() => computeAndLockPanelHeights(panels));
    };

    (window as TimelineDebugWindow).__selectYear = selectYear;

    markers.forEach(marker => {
      marker.addEventListener('click', () => selectYear(marker.getAttribute('data-year')));
      marker.addEventListener('keydown', event => {
        const index = markers.indexOf(marker);
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectYear(marker.getAttribute('data-year'));
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          const next = markers[(index + 1) % markers.length];
          if (next) next.focus();
        } else if (event.key === 'ArrowLeft') {
          event.preventDefault();
          const prev = markers[(index - 1 + markers.length) % markers.length];
          if (prev) prev.focus();
        } else if (event.key === 'Home') {
          event.preventDefault();
          const first = markers[0];
          if (first) first.focus();
        } else if (event.key === 'End') {
          event.preventDefault();
          const last = markers[markers.length - 1];
          if (last) last.focus();
        }
      });
    });

    computeAndLockPanelHeights(panels);
    attachResponsiveRecalc(panels, 160);
    window.addEventListener('orientationchange', () => computeAndLockPanelHeights(panels));
    selectYear('2025');
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryInit, { once: true });
  } else {
    tryInit();
  }

  document.addEventListener('astro:page-load', tryInit);
}

let mounted = false;

export function initAchievementsTimeline(): void {
  if (mounted) return;
  mounted = true;
  mountTimeline();
}
