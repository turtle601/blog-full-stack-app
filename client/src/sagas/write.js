import { all, takeLatest, fork } from 'redux-saga/effects';

import * as writeAPI from '../api/write';

import createAPIRequestSaga from './createRequestSaga';

// type
const WRITE_POST = 'write/WRITE_POST';

// 사가 생성
const writePostSaga = createAPIRequestSaga(WRITE_POST, writeAPI.writePost);

function* watchUser() {
  yield takeLatest(WRITE_POST, writePostSaga);
}

export default function* WriteSaga() {
  yield all([fork(watchUser)]);
}
