/**
 * timelinePanels.ts
 * 年パネル高さ計測 & アクティブ切替補助ユーティリティ (Stage5 継続: ロジック抽出)
 */
export function computeAndLockPanelHeights(panels: HTMLElement[]) {
  if (!panels.length) return;
  const states = panels.map(p => p.classList.contains('hidden'));
  panels.forEach(p => p.classList.remove('hidden'));
  let max = 0;
  panels.forEach(p => {
    const h = p.scrollHeight;
    if (h > max) max = h;
  });
  panels.forEach((p, i) => {
    if (states[i]) p.classList.add('hidden');
    p.style.minHeight = max + 'px';
  });
}

export function attachResponsiveRecalc(panels: HTMLElement[], delay = 180) {
  let timer: number | undefined;
  window.addEventListener('resize', () => {
    if (timer) window.clearTimeout(timer);
    timer = window.setTimeout(() => computeAndLockPanelHeights(panels), delay);
  });
}
