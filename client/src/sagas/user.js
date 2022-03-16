import { all, takeLatest, fork } from 'redux-saga/effects';

import * as authAPI from '../api/auth';
import { removeLoginUser } from '../utils/localStorage';

import createAPIRequestSaga, {
  createAPIRequestType,
} from './createRequestSaga';

// type
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createAPIRequestType('user/CHECK');

// 사가 생성
const checkSaga = createAPIRequestSaga(CHECK, authAPI.check);
const checkFailureSaga = () => {
  removeLoginUser(); // 실패할 시 localdata제거
};

function* watchUser() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
}

export default function* UserSaga() {
  yield all([fork(watchUser)]);
}
