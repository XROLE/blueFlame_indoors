import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import signInReducer from './signinReducer';
import products from './productReducer';
import cartCount from './cartReducer';

export const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  products,
  cartCount,
});
