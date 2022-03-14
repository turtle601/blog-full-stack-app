import { all, takeLatest, fork } from 'redux-saga/effects';

import * as authAPI from '../api/auth';
import createAPIRequestSaga from './createRequestSaga';

const REGISTER = 'auth/REGISTER';
const LOGIN = 'auth/LOGIN';

// 사가 생성
const registerSaga = createAPIRequestSaga(REGISTER, authAPI.register);
const loginSaga = createAPIRequestSaga(LOGIN, authAPI.login);

function* watchAuth() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

export default function* AuthSaga() {
  yield all([fork(watchAuth)]);
}
