import { useRef, useEffect } from 'react';
import useVisibility from '@/hooks/useVisibility';

const options = { threshold: 1 };

const useObserver = () => {
  const ref = useRef<HTMLDivElement>({} as HTMLDivElement);
  const { setVisibleEntry } = useVisibility();

  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    options.threshold = 0.45;
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setVisibleEntry(`#${entry.target.id}`);
      }
    }, options);

    observer.observe(ref.current);
  }, [options.threshold]);

  return { ref };
};

export default useObserver;
