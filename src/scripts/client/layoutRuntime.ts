let initialized = false;
let advisoryBound = false;
let timeIntervalId: number | undefined;

function updateTime(): void {
  const now = new Date();
  const time = now.toLocaleTimeString('ja-JP', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });
  const el = document.getElementById('current-time');
  if (el) el.textContent = time;
}

function updateActiveNav(): void {
  const currentPath = window.location.pathname;
  document.querySelectorAll<HTMLAnchorElement>('.nav-link').forEach(anchor => {
    anchor.classList.remove('active');
    if (anchor.getAttribute('href') === currentPath) {
      anchor.classList.add('active');
    }
  });
}

function createParticles(): void {
  const container = document.querySelector<HTMLElement>('.fixed.inset-0');
  if (!container) return;

  for (let i = 0; i < 4; i += 1) {
    window.setTimeout(() => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-accent-cyan rounded-full opacity-60 animate-ping';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(particle);
      window.setTimeout(() => particle.remove(), 4000);
    }, i * 900);
  }
}

function setupDeviceAdvisory(): void {
  if (advisoryBound) return;

  const banner = document.getElementById('device-advisory');
  const closeButton = document.getElementById('device-advisory-close');
  if (!banner) return;

  advisoryBound = true;
  const mqDesktop = window.matchMedia('(min-width: 1024px)');

  const refreshVisibility = (): void => {
    if (mqDesktop.matches || localStorage.getItem('hideDeviceAdvisory') === '1') {
      banner.style.display = 'none';
    } else {
      banner.style.display = 'flex';
    }
  };

  refreshVisibility();
  mqDesktop.addEventListener('change', refreshVisibility);
  closeButton?.addEventListener('click', () => {
    localStorage.setItem('hideDeviceAdvisory', '1');
    refreshVisibility();
  });
}

function bootLayoutRuntime(): void {
  updateTime();
  updateActiveNav();
  createParticles();
  setupDeviceAdvisory();

  if (timeIntervalId === undefined) {
    timeIntervalId = window.setInterval(updateTime, 1000 * 30);
  }
}

export function initLayoutRuntime(): void {
  if (initialized) return;
  initialized = true;

  const start = (): void => {
    bootLayoutRuntime();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }

  document.addEventListener('astro:page-load', updateActiveNav);
}
