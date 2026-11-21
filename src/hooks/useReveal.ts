import { useEffect, useRef } from 'react';

const REVEAL_OPTIONS: IntersectionObserverInit = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-revealed');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, REVEAL_OPTIONS);

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useRevealStagger<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const targets = Array.from(node.querySelectorAll<HTMLElement>('[data-reveal]'));
    const timeouts: number[] = [];

    const revealTargets = (stagger: boolean) => {
      targets.forEach((target, index) => {
        if (!stagger) {
          target.classList.add('is-revealed');
          return;
        }
        timeouts.push(window.setTimeout(() => target.classList.add('is-revealed'), index * 100));
      });
    };

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      revealTargets(false);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        revealTargets(true);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    observer.observe(node);
    return () => {
      observer.disconnect();
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  return ref;
}
