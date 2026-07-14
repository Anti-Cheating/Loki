'use client';
import { useEffect, useState } from 'react';

type TocItem = { id: string; text: string };

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!items.length || !('IntersectionObserver' in window)) return;
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0 }
    );
    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [items]);

  if (!items.length) return null;

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
    setActiveId(id);
  };

  return (
    <nav className="toc" aria-label="Table of contents">
      <p className="toc-label">On this page</p>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className={i.id === activeId ? 'is-active' : undefined}
              aria-current={i.id === activeId ? 'location' : undefined}
              onClick={(e) => onClick(e, i.id)}
            >
              {i.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
