import { combineReducers } from 'redux';
import darkReducer from './dark';

const rootReducer = combineReducers({
  darkReducer,
});

export default rootReducer;
