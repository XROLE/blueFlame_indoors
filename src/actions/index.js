import axios from 'axios';

export const signUpAction = (userData) => (dispatch) => {
  console.log('I am a chosen one. comming sooooooooooo ', userData);

  const signedUpUser = axios.post(
    "https://blueflame-indoors-api.herokuapp.com/api/v1/users", userData
  )
  .then((data) => {
    console.log(data.data);
    return data.data;
  })
  .catch(error => console.log("This is the error from axios ", error))
  return dispatch({
    type: 'TEST_ACTION',
    userData,
  })
}
