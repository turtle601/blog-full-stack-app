import { combineReducers } from 'redux';

// reducer 가져오기
import darkReducer from './dark';
import authReducer from './auth';
import loadingReducer from './loading';
import userReducer from './user';
import writeReducer from './wrtie';

const rootReducer = combineReducers({
  darkReducer,
  authReducer,
  loadingReducer,
  userReducer,
  writeReducer,
});

export default rootReducer;
