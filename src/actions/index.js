import axios from 'axios';
import {
  SIGNUP_IN_PROGRESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_IN_PROGRESS,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  GET_ALL_PRODUCTS_IN_PROGRESS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_CART_COUNT,
} from '../actions/actionType';

const header = {
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-type': 'application/j"son',
    "Access-Control-Allow-Origin": "*"
  },
};

export const signUpAction = (userData) => (dispatch) => {
  dispatch({ type: SIGNUP_IN_PROGRESS });
  return axios.post(
    "https://blueflame-indoors-api.herokuapp.com/api/v1/users", userData
  )
  .then((data) => {
    localStorage.setItem('BFT-token', data.data.Token);
    $('#exampleModalCenter').modal('hide');
    return dispatch({
      type: SIGNUP_SUCCESS,
      user: data.data
    });
  })
  .catch(error => {
    return dispatch({
      type: SIGNUP_FAILURE,
      error: error.response.data.error
    });
  });
};

export const signInAction = (userData) => (dispatch) => {
  dispatch({ type: SIGNIN_IN_PROGRESS });
  return axios.post(
    "https://blueflame-indoors-api.herokuapp.com/api/v1/users/login", userData
  )
  .then((data) => {
    localStorage.setItem('BFT-token', data.data.token);
    location.reload();
    $('#exampleModalCenter').modal('hide');
    return dispatch({
      type: SIGNIN_SUCCESS,
      user: data.data
    });
  })
  .catch(error => {
    console.log('I am a chosen one always ===> ', error);
    return dispatch({
      type: SIGNIN_FAILURE,
      error: error.response.data.error
    });
  });
};

export const getAllProducts = () => (dispatch) => {
  dispatch({type: GET_ALL_PRODUCTS_IN_PROGRESS});
  return axios.get(
    'https://blueflame-indoors-api.herokuapp.com/api/v1/products', header
    ).then((data) => {
      return dispatch({
      type: GET_ALL_PRODUCTS_SUCCESS,
      products: data.data
    }).catch((error) => {
      return dispatch({
        type: GET_ALL_PRODUCTS_FAILURE,
        error: error.response.data.error
      });
    });
  });
};

export const getCartCount = () => (dispatch) => {
  if(JSON.parse(localStorage.getItem('cart')) == null){
    return dispatch({
      type: GET_CART_COUNT,
      cartCount: 0
    });
  }else {
    return dispatch({
      type: GET_CART_COUNT,
      cartCount: JSON.parse(localStorage.getItem('cart')).length
    });

  }
};
