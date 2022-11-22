import { Visibility } from '@/types/typings';
import { createContext } from 'react';

type VisibilityProps = {
  visibleEntry: Visibility;
  setVisibleEntry: (entry: string) => void;
};

const VisibilityContext = createContext<VisibilityProps>({} as VisibilityProps);

export default VisibilityContext;
