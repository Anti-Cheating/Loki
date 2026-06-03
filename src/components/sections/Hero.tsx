'use client';
import { useEffect, useRef } from 'react';

export function Hero() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let sketchInstance: { remove: () => void } | null = null;

    function initSketch() {
      if (!host) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const P5 = (window as any).p5;
      if (!P5) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sketchInstance = new P5(function (p: any) {
        let W: number, H: number;
        const nodes: Array<{ x: number; y: number; vx: number; vy: number; r: number; ph: number; sp: number }> = [];
        const flags: Array<{ x: number; y: number; life: number; max: number }> = [];
        let scan = 0;
        let t = 0;

        function build() {
          if (!host) return;
          W = host.clientWidth;
          H = host.clientHeight;
          const count = W < 700 ? 34 : 72;
          nodes.length = 0;
          for (let i = 0; i < count; i++) {
            nodes.push({
              x: p.random(W), y: p.random(H),
              vx: p.random(-0.18, 0.18), vy: p.random(-0.18, 0.18),
              r: p.random(1.4, 3.0),
              ph: p.random(p.TWO_PI),
              sp: p.random(0.6, 1.5),
            });
          }
        }

        p.setup = function () {
          if (!host) return;
          const c = p.createCanvas(host.clientWidth, host.clientHeight);
          c.parent(host);
          p.pixelDensity(Math.min(window.devicePixelRatio || 1, 2));
          build();
        };

        p.windowResized = function () {
          if (!host) return;
          p.resizeCanvas(host.clientWidth, host.clientHeight);
          build();
        };

        function spawnFlag() {
          if (!nodes.length) return;
          const n = nodes[(Math.random() * nodes.length) | 0];
          flags.push({ x: n.x, y: n.y, life: 0, max: 150 });
        }

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
              if (d2 < 21000) {
                const al = p.map(d2, 0, 21000, 46, 0);
                p.stroke(150, 220, 175, al);
                p.line(a.x, a.y, b.x, b.y);
              }
            }
          }

          p.noStroke();
          for (const nd of nodes) {
            const pulse = 0.6 + 0.4 * Math.sin(t * nd.sp * 2 + nd.ph);
            p.fill(120, 240, 150, 60 + pulse * 95);
            p.circle(nd.x, nd.y, nd.r * 2.1);
            p.fill(120, 240, 150, 16);
            p.circle(nd.x, nd.y, nd.r * 6.5 * pulse);
          }

          for (let f = flags.length - 1; f >= 0; f--) {
            const fl = flags[f];
            fl.life++;
            const prog = fl.life / fl.max;
            const ringR = prog * 70;
            const a2 = (1 - prog) * 220;
            p.noFill();
            p.stroke(255, 96, 78, a2);
            p.strokeWeight(1.6);
            p.circle(fl.x, fl.y, ringR * 2);
            p.stroke(255, 96, 78, a2 * 0.5);
            p.circle(fl.x, fl.y, ringR * 1.3);
            p.noStroke();
            p.fill(255, 96, 78, (1 - prog) * 255);
            p.circle(fl.x, fl.y, 6);
            if (fl.life >= fl.max) flags.splice(f, 1);
          }

          if (p.frameCount % 110 === 0) spawnFlag();

          scan += 0.0016;
          const sy = (Math.sin(scan) * 0.5 + 0.5) * H;
          const grd = p.drawingContext.createLinearGradient(0, sy - 60, 0, sy + 60);
          grd.addColorStop(0, 'rgba(120,240,150,0)');
          grd.addColorStop(0.5, 'rgba(120,240,150,0.05)');
          grd.addColorStop(1, 'rgba(120,240,150,0)');
          p.drawingContext.fillStyle = grd;
          p.drawingContext.fillRect(0, sy - 60, W, 120);
        };
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).p5) {
      initSketch();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.4/p5.min.js';
      script.onload = initSketch;
      document.head.appendChild(script);
    }

    return () => {
      sketchInstance?.remove();
    };
  }, []);

  return (
    <section className="hero">
      <div ref={hostRef} id="hero-canvas" aria-hidden="true" />
      <div className="wrap hero-inner">
        <span className="kicker reveal">AI cheating is happening right now</span>
        <h1 className="display reveal" data-d="1">
          The candidate is talking to you. <span className="tx-gradient">Their AI is answering.</span>
        </h1>
        <p className="lead reveal" data-d="2">
          Cluely, InterviewCoder, ChatGPT. The tools that ghost-write interviews have gotten disturbingly good. Trueyy reads every signal they leave behind and gives your team a real read before you extend the offer.
        </p>
        <div className="hero-cta reveal" data-d="3">
          <a className="btn btn--primary btn--lg" href="#waitlist">
            Book a demo <span className="arw">&rarr;</span>
          </a>
          <a className="btn btn--ghost btn--lg" href="#how">
            See how it works
          </a>
        </div>
        <div className="hero-meta reveal" data-d="4">
          <span><i className="live-dot" /> Works inside Zoom, Meet &amp; Teams</span>
          <span>No candidate install required</span>
          <span>Consent-first by design</span>
        </div>
        <div className="trust-badges reveal" data-d="4">
          <span className="badge-trust"><span className="bt-dot" /> GDPR ready</span>
          <span className="badge-trust"><span className="bt-dot" /> SOC 2 aligned</span>
          <span className="badge-trust"><span className="bt-dot" /> No video stored</span>
          <span className="badge-trust"><span className="bt-dot" /> Consent-first</span>
        </div>
      </div>
    </section>
  );
}
