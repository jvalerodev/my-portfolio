import { Visibility, VisibilityAction } from '@/types/typings';

const reducer = (state: Visibility, action: VisibilityAction) => {
  switch (action.type) {
    case 'SET_VISIBLE_ENTRY':
      return {
        ...state,
        visibleEntry: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
