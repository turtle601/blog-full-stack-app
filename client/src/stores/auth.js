// immutable 라이브러리
import { Map } from 'immutable';

// redux-actions 라이브러리
import { createAction, handleActions } from 'redux-actions';

// types
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// actions
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register, login
    key, // username, password, passwordConfirm
    value, // 입력값
  }),
);

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
  },
  initialState,
);

export default authReducer;
