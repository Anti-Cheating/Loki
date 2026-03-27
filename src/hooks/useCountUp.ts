'use client';
import { useEffect, useState, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  delay?: number;
}

export function useCountUp({ end, duration = 1.5, delay = 0 }: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const durationMs = duration * 1000;

      function animate(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [hasStarted, end, duration, delay]);

  return { count, ref };
}
