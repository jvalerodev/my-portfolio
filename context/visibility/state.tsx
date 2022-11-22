import { useReducer } from 'react';
import VisibilityContext from '@/context/visibility/context';
import VisibilityReducer from '@/context/visibility/reducer';
import { Visibility } from '@/types/typings';

interface Props {
  children: JSX.Element;
}

const INITIAL_STATE: Visibility = {
  visibleEntry: ''
};

const VisibilityState = ({ children }: Props) => {
  const [state, dispatch] = useReducer(VisibilityReducer, INITIAL_STATE);

  const setVisibleEntry = (entry: string) => {
    dispatch({
      type: 'SET_VISIBLE_ENTRY',
      payload: entry
    });
  };

  return (
    <VisibilityContext.Provider
      value={{
        visibleEntry: state,
        setVisibleEntry
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

export default VisibilityState;
