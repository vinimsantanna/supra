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
  y = 22,
  scale = 0.985,
  threshold = 0.18,
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
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
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
