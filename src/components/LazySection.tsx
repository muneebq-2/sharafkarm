import React, { useEffect, useRef, useState, Suspense } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  minHeight?: string;
  forceLoad?: boolean;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  minHeight = '120px',
  forceLoad = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(forceLoad);

  useEffect(() => {
    if (forceLoad) setIsVisible(true);
  }, [forceLoad]);

  useEffect(() => {
    if (isVisible) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? undefined : minHeight }}>
      {isVisible ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
};

export default LazySection;
