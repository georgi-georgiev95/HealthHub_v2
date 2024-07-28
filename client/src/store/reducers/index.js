import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    authenticator: authReducer,
});

export default rootReducer;
