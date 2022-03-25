import { all, takeLatest, fork } from 'redux-saga/effects';

import * as postsAPI from '../api/posts';

import createAPIRequestSaga from './createRequestSaga';

// type
const LIST_POST = 'postList/LIST_POST';

// 사가 생성
const listPostSaga = createAPIRequestSaga(LIST_POST, postsAPI.listPost);

function* watchUser() {
  yield takeLatest(LIST_POST, listPostSaga);
}

export default function* ListSaga() {
  yield all([fork(watchUser)]);
}
