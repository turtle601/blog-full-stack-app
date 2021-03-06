import { all, call } from 'redux-saga/effects';
import AuthSaga from './auth';
import UserSaga from './user';
import WriteSaga from './write';
import ReadSaga from './read';
import ListSaga from './postList';

export default function* rootSaga() {
  yield all([
    call(AuthSaga),
    call(UserSaga),
    call(WriteSaga),
    call(ReadSaga),
    call(ListSaga),
  ]);
}
