import axios from 'axios';
import {
  SIGNUP_IN_PROGRESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../actions/actionType';

export const signUpAction = (userData) => (dispatch) => {
  dispatch({ type: SIGNUP_IN_PROGRESS })
  return axios.post(
    "https://blueflame-indoors-api.herokuapp.com/api/v1/users", userData
  )
  .then((data) => {
    localStorage.setItem('BFT-token', data.data.Token);
    return dispatch({
      type: SIGNUP_SUCCESS,
      user: data.data
    })
  })
  .catch(error => {
    console.log("This is the error from axios ", error.message);
    return dispatch({
      type: SIGNUP_FAILURE,
      error
    })
  })
}
