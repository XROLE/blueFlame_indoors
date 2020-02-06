import { GET_CART_COUNT } from '../actions/actionType';

const defaultState = 0;

export default (state=defaultState, action) => {
  switch (action.type) {
    case GET_CART_COUNT:
      return action.cartCount;

      default:
      return state;
  }
};
