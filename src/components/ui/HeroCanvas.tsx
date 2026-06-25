'use client';
import { useEffect, useRef } from 'react';

export function HeroCanvas() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let sketchInstance: { remove: () => void } | null = null;
    let fitFn: () => void = () => {};
    const ro = new ResizeObserver(() => fitFn());
    ro.observe(host);

    function initSketch() {
      if (!host) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const P5 = (window as any).p5;
      if (!P5) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sketchInstance = new P5(function (p: any) {
        let W: number, H: number;
        const nodes: Array<{ x: number; y: number; vx: number; vy: number; r: number; ph: number; sp: number }> = [];
        let t = 0;

        function build() {
          if (!host) return;
          W = host.clientWidth;
          H = host.clientHeight;
          const count = W < 700 ? 24 : 50;
          nodes.length = 0;
          for (let i = 0; i < count; i++) {
            nodes.push({
              x: p.random(W), y: p.random(H),
              vx: p.random(-0.16, 0.16), vy: p.random(-0.16, 0.16),
              r: p.random(1.2, 2.6),
              ph: p.random(p.TWO_PI),
              sp: p.random(0.6, 1.4),
            });
          }
        }

        function fit() {
          if (!host) return;
          const w = host.clientWidth || host.offsetWidth || 1;
          const h = host.clientHeight || host.offsetHeight || 1;
          if (w > 1 && h > 1) {
            p.resizeCanvas(w, h);
            build();
          }
        }
        fitFn = fit;

        p.setup = function () {
          if (!host) return;
          const w = host.clientWidth || host.offsetWidth || 1;
          const h = host.clientHeight || host.offsetHeight || 1;
          const c = p.createCanvas(w, h);
          c.parent(host);
          p.pixelDensity(Math.min(window.devicePixelRatio || 1, 2));
          build();
        };

        p.windowResized = function () {
          fit();
        };

        p.draw = function () {
          p.clear();
          t += 0.01;

          p.strokeWeight(1);
          for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i];
            a.x += a.vx; a.y += a.vy;
            if (a.x < 0 || a.x > W) a.vx *= -1;
            if (a.y < 0 || a.y > H) a.vy *= -1;
            for (let j = i + 1; j < nodes.length; j++) {
              const b = nodes[j];
              const dx = a.x - b.x, dy = a.y - b.y;
              const d2 = dx * dx + dy * dy;
              if (d2 < 20000) {
                const al = p.map(d2, 0, 20000, 110, 0);
                p.stroke(20, 140, 82, al);
                p.line(a.x, a.y, b.x, b.y);
              }
            }
          }

          p.noStroke();
          for (const nd of nodes) {
            const pulse = 0.6 + 0.4 * Math.sin(t * nd.sp * 2 + nd.ph);
            p.fill(18, 135, 78, 150 + pulse * 105);
            p.circle(nd.x, nd.y, nd.r * 2.4);
            p.fill(40, 175, 110, 30);
            p.circle(nd.x, nd.y, nd.r * 6.5 * pulse);
          }
        };
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).p5) {
      initSketch();
    } else {
      const existing = document.querySelector('script[data-p5]') as HTMLScriptElement | null;
      if (existing) {
        existing.addEventListener('load', initSketch);
      } else {
        const s = document.createElement('script');
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.4/p5.min.js';
        s.setAttribute('data-p5', '');
        s.onload = initSketch;
        document.head.appendChild(s);
      }
    }

    return () => {
      ro.disconnect();
      sketchInstance?.remove();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      id="hero-canvas"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        opacity: 0.9,
        pointerEvents: 'none',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 95% at 30% 42%, #000 0%, #000 30%, transparent 82%)',
        maskImage: 'radial-gradient(ellipse 80% 95% at 30% 42%, #000 0%, #000 30%, transparent 82%)',
      }}
    />
  );
}
