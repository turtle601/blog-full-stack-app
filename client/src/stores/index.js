import { combineReducers } from 'redux';

// reducer 가져오기
import darkReducer from './dark';
import authReducer from './auth';

const rootReducer = combineReducers({
  darkReducer,
  authReducer,
});

export default rootReducer;
