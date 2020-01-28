import axios from 'axios';
import {
  SIGNUP_IN_PROGRESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_ALL_PRODUCTS_IN_PROGRESS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE ,
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
    })
  })
  .catch(error => {
    return dispatch({
      type: SIGNUP_FAILURE,
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
