'use client';

import VisibilityState from '@/context/visibility/state';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return <VisibilityState>{children}</VisibilityState>;
};

export default Providers;
