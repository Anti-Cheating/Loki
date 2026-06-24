'use client';

import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  asAnchor?: boolean;
}

export function BookDemoButton({ className, style, children, asAnchor }: Props) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  const calProps = {
    className,
    style,
    'data-cal-namespace': '30min',
    'data-cal-link': 'trueyy/30min',
    'data-cal-config': '{"layout":"month_view"}',
  };

  if (asAnchor) {
    return <a {...calProps}>{children}</a>;
  }

  return <button {...calProps}>{children}</button>;
}
