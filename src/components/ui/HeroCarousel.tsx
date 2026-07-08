'use client';
import { useEffect, useState } from 'react';

const SLIDES = [
  { src: '/marketing/hero-cover.webp', alt: 'Live interview-integrity command center showing an 82 integrity score and a real-time signal feed.' },
  { src: '/marketing/product-1.webp', alt: 'AI tool fingerprinting flags a hidden assistant at 98% confidence.' },
  { src: '/marketing/product-2.webp', alt: 'App and window focus tracking shows attention leaving the interview.' },
  { src: '/marketing/product-3.webp', alt: 'Paste velocity catches a 240 WPM paste no human could type.' },
  { src: '/marketing/product-5.webp', alt: 'Off-screen device signals point to a likely second device.' },
  { src: '/marketing/product-6.webp', alt: 'Answer-structure analysis separates human reasoning from generated text.' },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % SLIDES.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-carousel reveal" data-d="2">
      <div className="hero-carousel-glow" aria-hidden="true" />
      {SLIDES.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className={`hero-slide${i === active ? ' is-active' : ''}`}
          loading={i === 0 ? 'eager' : 'lazy'}
          aria-hidden={i === active ? undefined : true}
        />
      ))}
      <div className="hero-dots" role="tablist" aria-label="Featured detection signals">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className={i === active ? 'on' : ''}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-selected={i === active}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
}
