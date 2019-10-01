import { combineReducers } from 'redux';
// import errorReducer from './errorReducer';
import jphReducer from './jphReducer'

export default combineReducers({
    // errors: errorReducer,
    jph: jphReducer
});
