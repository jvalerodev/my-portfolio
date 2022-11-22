import { useContext } from 'react';
import VisibilityContext from '@/context/visibility/context';

const useVisibility = () => {
  return useContext(VisibilityContext);
};

export default useVisibility;
