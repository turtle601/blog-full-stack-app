import { createAction, handleActions } from 'redux-actions';

// types
const DARK = 'DARK';

// actions
export const darkAction = createAction(DARK);

const initialState = {
  switch: false,
};

// reducer
const darkReducer = handleActions(
  {
    [DARK]: state => ({
      ...state,
      switch: !state.switch,
    }),
  },
  initialState,
);

export default darkReducer;
