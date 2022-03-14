import { all, call } from 'redux-saga/effects';
import AuthSaga from './auth';
import UserSaga from './user';

export default function* rootSaga() {
  yield all([call(AuthSaga), call(UserSaga)]);
}
