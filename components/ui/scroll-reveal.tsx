'use client';

import { CSSProperties, HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';

type ScrollRevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
  threshold?: number;
};

function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 16,
  scale = 0.992,
  threshold = 0.08,
  style,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          requestAnimationFrame(() => setVisible(true));
          io.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={
        {
          '--reveal-delay': `${delay}ms`,
          '--reveal-y': `${y}px`,
          '--reveal-scale': scale,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
}

export { ScrollReveal };
