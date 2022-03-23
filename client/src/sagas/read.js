import { all, takeLatest, fork } from 'redux-saga/effects';

import * as postsAPI from '../api/posts';

import createAPIRequestSaga from './createRequestSaga';

// type
const READ_POST = 'post/READ_POST';

// 사가 생성
const readPostSaga = createAPIRequestSaga(READ_POST, postsAPI.readPost);

function* watchUser() {
  yield takeLatest(READ_POST, readPostSaga);
}

export default function* ReadSaga() {
  yield all([fork(watchUser)]);
}
