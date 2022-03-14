import { all, call } from 'redux-saga/effects';
import AuthSaga from './auth';

export default function* rootSaga() {
  yield all([call(AuthSaga)]);
}
