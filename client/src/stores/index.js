import { combineReducers } from 'redux';

// reducer 가져오기
import darkReducer from './dark';
import authReducer from './auth';
import loadingReducer from './loading';
import userReducer from './user';
import writeReducer from './write';
import readReducer from './read';
import listReducer from './postList';

const rootReducer = combineReducers({
  darkReducer,
  authReducer,
  loadingReducer,
  userReducer,
  writeReducer,
  readReducer,
  listReducer,
});

export default rootReducer;
