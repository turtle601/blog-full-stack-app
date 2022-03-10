import { createAction, handleAction } from 'redux-actions';

// types
const SAMPLE = 'sample/SAMPLE';

// actions
export const sampleAction = createAction(SAMPLE);

const initialState = {
  count: 0,
};

// reducer
export const sample = handleAction(
  {
    [SAMPLE]: (state, action) => state,
  },
  initialState,
);

export default sample;
