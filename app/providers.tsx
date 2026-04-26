'use client';

import { useEffect } from 'react';
import VisibilityState from '@/context/visibility/state';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return <VisibilityState>{children}</VisibilityState>;
};

export default Providers;
