// immutable 라이브러리
import { Map } from 'immutable';

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
const initialState = Map({
  register: Map({
    username: '',
    password: '',
    passwordConfirm: '',
  }),
  login: Map({
    username: '',
    password: '',
  }),
  auth: null,
  authError: null,
});

// reducer
const authReducer = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => {
      return state.setIn([form, key], value);
    },
    [INITIALIZE_FORM]: (state, { payload: form }) => {
      if (form === 'login') {
        return state.set(form, Map({ username: '', password: '' }));
      }

      return state.set(
        form,
        Map({ username: '', password: '', passwordConfirm: '' }),
      );
    },
    [REGISTER_SUCCESS]: (state, { payload: auth }) => {
      return state.set('auth', auth).set('authError', null);
    },
    [REGISTER_FAILURE]: (state, { payload: error }) => {
      return state.set('authError', error);
    },
    [LOGIN_SUCCESS]: (state, { payload: auth }) => {
      return state.set('auth', auth).set('authError', null);
    },
    [LOGIN_FAILURE]: (state, { payload: error }) => {
      return state.set('authError', error);
    },
  },
  initialState,
);

export default authReducer;
