import React, { useEffect, useRef } from 'react';

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    interface Particle {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      baseAlpha: number;
    }

    interface Wave {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      speed: number;
      colorRgb: string;
    }

    let particles: Particle[] = [];
    const waves: Wave[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
      lastX: -1000,
      lastY: -1000,
      isHovered: false,
    };

    const getColors = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      return {
        accentRgb: isDark ? '191, 84, 57' : '165, 66, 40',
        particleRgb: isDark ? '242, 233, 218' : '40, 40, 40',
      };
    };

    const initParticleGrid = () => {
      particles = [];
      const gridSpacing = width < 768 ? 45 : 35;
      const cols = Math.floor(width / gridSpacing);
      const rows = Math.floor(height / gridSpacing);

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const bx = c * gridSpacing + (width % gridSpacing) / 2;
          const by = r * gridSpacing + (height % gridSpacing) / 2;
          particles.push({
            baseX: bx,
            baseY: by,
            x: bx,
            y: by,
            vx: 0,
            vy: 0,
            size: Math.random() * 1.5 + 1,
            alpha: Math.random() * 0.25 + 0.1,
            baseAlpha: Math.random() * 0.25 + 0.1,
          });
        }
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initParticleGrid();
    };

    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      mouse.isHovered = true;

      const dist = Math.hypot(newX - mouse.lastX, newY - mouse.lastY);
      if (dist > 60) {
        const colors = getColors();
        waves.push({
          x: newX,
          y: newY,
          radius: 10,
          maxRadius: Math.min(220, dist * 3 + 80),
          alpha: 0.45,
          speed: 2.5,
          colorRgb: colors.accentRgb,
        });
        mouse.lastX = newX;
        mouse.lastY = newY;
      }

      mouse.x = newX;
      mouse.y = newY;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      if (!looping) return;
      ctx.clearRect(0, 0, width, height);
      const colors = getColors();

      // Render Waves
      for (let i = waves.length - 1; i >= 0; i--) {
        const w = waves[i];
        w.radius += w.speed;
        w.alpha *= 0.96;

        if (w.alpha > 0.01 && w.radius < w.maxRadius) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${w.colorRgb}, ${w.alpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.restore();
        } else {
          waves.splice(i, 1);
        }
      }

      // Render Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion && mouse.isHovered) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          const maxDist = 140;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 12;
            const angle = Math.atan2(dy, dx);
            p.vx -= Math.cos(angle) * force * 0.15;
            p.vy -= Math.sin(angle) * force * 0.15;
            p.alpha = Math.min(0.8, p.baseAlpha + (1 - dist / maxDist) * 0.5);
          } else {
            p.alpha += (p.baseAlpha - p.alpha) * 0.05;
          }
        }

        // Return force
        p.vx += (p.baseX - p.x) * 0.05;
        p.vy += (p.baseY - p.y) * 0.05;

        // Friction
        p.vx *= 0.82;
        p.vy *= 0.82;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = `rgba(${colors.particleRgb}, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (looping) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    let looping = false;
    let onScreen = false;
    let animationFrameId = 0;

    const startLoop = () => {
      if (looping || document.hidden || !onScreen) return;
      looping = true;
      animationFrameId = requestAnimationFrame(render);
    };

    const stopLoop = () => {
      looping = false;
      cancelAnimationFrame(animationFrameId);
    };

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      onScreen = Boolean(entry?.isIntersecting);
      if (onScreen) startLoop();
      else stopLoop();
    });
    visibilityObserver.observe(canvas);

    const onVisibilityChange = () => {
      if (document.hidden || !onScreen) stopLoop();
      else startLoop();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      stopLoop();
      visibilityObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} id="particles-canvas" />;
};
