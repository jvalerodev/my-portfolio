import { useRef, useEffect } from 'react';
import useVisibility from '@/hooks/useVisibility';

const useObserver = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { setVisibleEntry } = useVisibility();

  useEffect(() => {
    if (!ref.current) return;

    const threshold =
      typeof window !== 'undefined' && window.innerWidth < 1024 ? 0.45 : 1;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setVisibleEntry(`#${entry.target.id}`);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [setVisibleEntry]);

  return { ref };
};

export default useObserver;
