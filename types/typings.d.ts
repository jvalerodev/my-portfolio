export type Visibility = {
  visibleEntry: string;
};

export type VisibilityAction = {
  type: 'SET_VISIBLE_ENTRY';
  payload: string;
};
