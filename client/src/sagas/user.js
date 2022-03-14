import { all, takeLatest, fork } from 'redux-saga/effects';

import * as authAPI from '../api/auth';

import createAPIRequestSaga from './createRequestSaga';

const CHECK = 'user/CHECK';

// 사가 생성
const checkSaga = createAPIRequestSaga(CHECK, authAPI.check);

function* watchUser() {
  yield takeLatest(CHECK, checkSaga);
}

export default function* UserSaga() {
  yield all([fork(watchUser)]);
}
