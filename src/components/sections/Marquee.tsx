export function Marquee() {
  const items = [
    'Zoom', 'Google Meet', 'Microsoft Teams',
    'Greenhouse', 'Lever', 'Workday',
    'Zoom', 'Google Meet', 'Microsoft Teams',
    'Greenhouse', 'Lever', 'Workday',
  ];

  return (
    <section className="section--tight">
      <div className="wrap center">
        <p className="mq-cap">Sits beside the tools your team already runs interviews on</p>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {items.map((label, i) => (
            <span key={i} className="mq-item">{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
