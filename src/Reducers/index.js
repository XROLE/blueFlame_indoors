import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import products from './productReducer';
import cartCount from './cartReducer';

export const rootReducer = combineReducers({
  signUp: signUpReducer,
  products,
  cartCount,
});
