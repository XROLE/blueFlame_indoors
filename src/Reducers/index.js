import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import products from './productReducer';

export const rootReducer = combineReducers({
  signUp: signUpReducer,
  products
});
