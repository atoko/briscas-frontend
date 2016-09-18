import { combineReducers } from 'redux';
import session from './ducks/session';

const rootReducer = combineReducers({ session });
export default rootReducer