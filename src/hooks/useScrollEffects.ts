import { useEffect } from 'react';

export function useScrollEffects() {
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      document.body.classList.toggle('is-scrolled', window.scrollY > 16);

      const backButton = document.querySelector('.back-to-top');
      if (backButton) {
        backButton.classList.toggle('visible', window.scrollY > 600);
      }

      const progress = document.querySelector<HTMLElement>('.scroll-progress');
      if (progress) {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const amount = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        progress.style.width = `${Math.min(Math.max(amount, 0), 100)}%`;
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
}
