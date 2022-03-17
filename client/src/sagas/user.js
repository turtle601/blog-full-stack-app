import { all, takeLatest, fork, call } from 'redux-saga/effects';

import * as authAPI from '../api/auth';
import { removeLoginUser } from '../utils/localStorage';

import createAPIRequestSaga, {
  createAPIRequestType,
} from './createRequestSaga';

// type
const LOGOUT = 'user/LOGOUT';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createAPIRequestType('user/CHECK');

// 사가 생성
const checkSaga = createAPIRequestSaga(CHECK, authAPI.check);
const checkFailureSaga = () => {
  removeLoginUser(); // 실패할 시 localdata제거
};

function* logoutSaga() {
  yield call(authAPI.logout); // logout API 호출
  removeLoginUser(); // 로그아웃 발생 시 localdata제거
}

function* watchUser() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

export default function* UserSaga() {
  yield all([fork(watchUser)]);
}
