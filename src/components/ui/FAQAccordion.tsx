'use client';
import { useState } from 'react';

interface FAQItem { q: string; a: string }

function Item({ q, a }: FAQItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        {q}
        <span className="pm" />
      </button>
      <div className="faq-a" style={{ maxHeight: open ? '400px' : undefined }}>
        <div className="faq-a-inner">{a}</div>
      </div>
    </div>
  );
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="faq">
      {items.map(item => <Item key={item.q} q={item.q} a={item.a} />)}
    </div>
  );
}
