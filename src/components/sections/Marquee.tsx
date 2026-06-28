'use client';
import { useState } from 'react';

const BRANDS = [
  { name: 'Zoom', logo: '/logos/zoom.svg' },
  { name: 'Google Meet', logo: '/logos/google-meet.svg' },
  { name: 'Microsoft Teams', logo: '/logos/microsoft-teams.svg' },
  { name: 'Greenhouse', logo: '/logos/greenhouse.svg' },
  { name: 'Lever', logo: '/logos/lever.svg' },
  { name: 'Workday', logo: '/logos/workday.svg' },
];

export function Marquee() {
  const [paused, setPaused] = useState(false);
  // duplicated once so the -50% scroll loops seamlessly
  const items = [...BRANDS, ...BRANDS];

  return (
    <section className="section--tight">
      <div className="wrap center">
        <p className="mq-cap">Sits beside the tools your team already runs interviews on</p>
      </div>
      <div className="marquee" aria-hidden="true">
        <div
          className="marquee-track"
          style={paused ? { animationPlayState: 'paused' } : undefined}
        >
          {items.map((brand, i) => (
            <span key={i} className="mq-logo">
              <img src={brand.logo} alt="" width={24} height={24} loading="lazy" />
              <span>{brand.name}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="wrap center">
        <button
          type="button"
          className="animation-pause-btn marquee-pause-btn"
          onClick={() => setPaused(p => !p)}
          aria-label={paused ? 'Resume scrolling logos' : 'Pause scrolling logos'}
        >
          {paused ? 'Resume' : 'Pause'}
        </button>
      </div>
    </section>
  );
}
