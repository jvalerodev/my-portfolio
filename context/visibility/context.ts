import { createContext } from 'react';

type VisibilityProps = {
  visibleEntry: string;
  setVisibleEntry: (entry: string) => void;
};

const VisibilityContext = createContext<VisibilityProps>({} as VisibilityProps);

export default VisibilityContext;
