import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';


// const rootReducer = (injectedReducers = {}) => {
//   const combineRootReducers = combineReducers({
//     ...injectedReducers,
//     auth,
//     user
//   })
//   return combineRootReducers
// }


const reducers = combineReducers({
  auth,
  user,
});

export default reducers;
