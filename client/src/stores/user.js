import { createAction, handleActions } from 'redux-actions';
import { createAPIRequestType } from '../sagas/createRequestSaga';

// types
const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리
const LOGOUT = 'user/LOGOUT';

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createAPIRequestType('user/CHECK');
// actions
export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const initialState = {
  user: null,
  checkError: null,
};
// reducer
const userReducer = handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => {
      return {
        ...state,
        user,
      };
    },
    [CHECK_SUCCESS]: (state, { payload: user }) => {
      return {
        ...state,
        user,
        checkError: null,
      };
    },
    [CHECK_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        checkError: error,
        user: null,
      };
    },
    [LOGOUT]: state => {
      return {
        ...state,
        user: null,
      };
    },
  },
  initialState,
);

export default userReducer;
