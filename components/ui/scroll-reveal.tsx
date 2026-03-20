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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateViewportMode = () => setIsMobile(window.innerWidth < 768);
    updateViewportMode();
    window.addEventListener('resize', updateViewportMode);
    return () => window.removeEventListener('resize', updateViewportMode);
  }, []);

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
      {
        threshold: isMobile ? Math.min(threshold, 0.01) : threshold,
        rootMargin: isMobile ? '0px 0px 24% 0px' : '0px 0px 12% 0px',
      }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [isMobile, threshold]);

  const resolvedDelay = isMobile ? Math.min(delay * 0.18, 60) : delay;
  const resolvedY = isMobile ? Math.min(y, 10) : y;
  const resolvedScale = isMobile ? Math.max(scale, 0.996) : scale;

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={
        {
          '--reveal-delay': `${resolvedDelay}ms`,
          '--reveal-y': `${resolvedY}px`,
          '--reveal-scale': resolvedScale,
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
