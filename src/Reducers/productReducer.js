import {
  GET_ALL_PRODUCTS_IN_PROGRESS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE
} from '../actions/actionType';

const defaultState = {
  getProductInProgress: false,
  products: [],
  error: '',
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case GET_ALL_PRODUCTS_IN_PROGRESS: {
      return {
        ...state,
        getProductInProgress: true
      };
    };

    case GET_ALL_PRODUCTS_SUCCESS: {
      return {
        ...state,
        getProductInProgress: false,
        error: '',
        products: action.products
      };
    };

    case GET_ALL_PRODUCTS_FAILURE: {
      return {
        ...state,
        getProductInProgress: false,
        error: action.error
      };
    };

    default:
      return state;
  }
}
