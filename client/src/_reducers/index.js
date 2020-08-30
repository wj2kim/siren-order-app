import { combineReducers } from 'redux';
import user from './user_reducer.js';

const _reducers = combineReducers({
    user,
});

export default _reducers;