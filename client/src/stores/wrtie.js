import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

export const initailize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD);

const initialState = {
  title: '',
  body: '',
  tags: [],
};

const writeReducer = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
  },
  initialState,
);

export default writeReducer;
