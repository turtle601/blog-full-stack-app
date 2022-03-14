import { combineReducers } from 'redux';

// reducer 가져오기
import darkReducer from './dark';
import authReducer from './auth';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  darkReducer,
  authReducer,
  loadingReducer,
});

export default rootReducer;
