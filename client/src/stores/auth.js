// immer 관련 라이브러리
import produce from 'immer';

// redux-actions 라이브러리
import { createAction, handleActions } from 'redux-actions';
import { createAPIRequestType } from '../sagas/createRequestSaga';

// types
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createAPIRequestType('auth/REGISTER');

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createAPIRequestType('auth/REGISTER');

// actions
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register, login
    key, // username, password, passwordConfirm
    value, // 입력값
  }),
);

export const register = createAction(REGISTER, ({ username, password }) => ({
  username,
  password,
}));

export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password,
}));

// 결과값 : register or login
export const initializeForm = createAction(INITIALIZE_FORM, form => form);

// state
const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null,
};

// reducer
const authReducer = handleActions(
  {
    // Field 채우기
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value;
      }),
    // 폼 초기화
    [INITIALIZE_FORM]: (state, { payload: form }) => {
      return {
        ...state,
        [form]: initialState[form],
        authError: null,
      };
    },

    // 회원 가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => {
      return {
        ...state,
        auth,
        authError: null,
      };
    },

    // 회원 가입 성공
    [REGISTER_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        authError: error,
      };
    },

    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => {
      return {
        ...state,
        authError: null,
        auth,
      };
    },

    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        authError: error,
      };
    },
  },
  initialState,
);

export default authReducer;
