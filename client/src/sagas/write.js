import { all, takeLatest, fork } from 'redux-saga/effects';

import * as postsAPI from '../api/posts';

import createAPIRequestSaga from './createRequestSaga';

// type
const WRITE_POST = 'write/WRITE_POST';
const UPDATE_POST = 'write/UPDATE_POST';

// 사가 생성
const writePostSaga = createAPIRequestSaga(WRITE_POST, postsAPI.writePost);
const updatePostSaga = createAPIRequestSaga(UPDATE_POST, postsAPI.updatePost);

function* watchUser() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}

export default function* WriteSaga() {
  yield all([fork(watchUser)]);
}
