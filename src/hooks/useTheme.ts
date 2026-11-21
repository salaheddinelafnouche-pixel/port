import { useEffect, useState } from 'react';

const THEME_KEY = 'portfolio-theme';

export type Theme = 'light' | 'dark';

type ThemeListener = (theme: Theme) => void;

function readStoredTheme(): Theme | null {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    return null;
  }
  return null;
}

function readPreferredTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

let theme: Theme = readStoredTheme() ?? readPreferredTheme();
const listeners = new Set<ThemeListener>();

function notify() {
  listeners.forEach((listener) => listener(theme));
}

function applyTheme(newTheme: Theme) {
  document.documentElement.classList.add('theme-switching');
  document.documentElement.setAttribute('data-theme', newTheme);
  try {
    localStorage.setItem(THEME_KEY, newTheme);
  } catch {
    // Private mode can reject storage; the attribute still updates the UI.
  }
  theme = newTheme;
  notify();
  window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: newTheme } }));

  window.setTimeout(() => {
    document.documentElement.classList.remove('theme-switching');
  }, 400);
}

function toggleTheme(e?: { clientX?: number; clientY?: number }) {
  const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    applyTheme(nextTheme);
    return;
  }

  const x = e && typeof e.clientX === 'number' ? e.clientX : window.innerWidth / 2;
  const y = e && typeof e.clientY === 'number' ? e.clientY : window.innerHeight / 2;
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  const viewTransitionDocument = document as Document & {
    startViewTransition?: (update: () => void) => { ready: Promise<void> };
  };

  if (viewTransitionDocument.startViewTransition) {
    const transition = viewTransitionDocument.startViewTransition(() => {
      applyTheme(nextTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${Math.ceil(endRadius)}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 450,
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
    return;
  }

  const ripple = document.createElement('div');
  ripple.className = 'theme-ripple';
  ripple.style.background = nextTheme === 'dark' ? '#0A0A0A' : '#FAFAF8';
  ripple.style.clipPath = `circle(0px at ${x}px ${y}px)`;
  document.body.appendChild(ripple);

  applyTheme(nextTheme);

  window.requestAnimationFrame(() => {
    ripple.style.clipPath = `circle(${Math.ceil(endRadius)}px at ${x}px ${y}px)`;
  });

  window.setTimeout(() => {
    ripple.remove();
  }, 550);
}

document.documentElement.setAttribute('data-theme', theme);

window.addEventListener('keydown', (event) => {
  if (event.key !== 't' && event.key !== 'T') return;
  const target = event.target as HTMLElement | null;
  if (target && target.tagName.match(/INPUT|TEXTAREA|SELECT/i)) return;
  toggleTheme();
});

export function useTheme() {
  const [current, setCurrent] = useState<Theme>(theme);

  useEffect(() => {
    listeners.add(setCurrent);
    setCurrent(theme);
    return () => {
      listeners.delete(setCurrent);
    };
  }, []);

  return { theme: current, toggleTheme };
}
