'use client';

import VisibilityState from '@/context/visibility/state';
import StyledComponentsRegistry from '@/app/lib/registry';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <StyledComponentsRegistry>
      <VisibilityState>{children}</VisibilityState>
    </StyledComponentsRegistry>
  );
};

export default Providers;
