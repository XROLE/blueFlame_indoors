import {
    SIGNIN_IN_PROGRESS,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE
  } from '../actions/actionType';
  
  const defaultState = {
    inProgress: false,
    user: '',
    error: ''
  };
  
  export default (state = defaultState, action) => {
    switch (action.type) {
      case SIGNIN_IN_PROGRESS: {
        return {
          ...state,
          inProgress: true,
        };
      }
      case SIGNIN_SUCCESS: {
        return {
          ...state,
          inProgress: false,
          error: '',
          user: action.user
        };
      }
      case SIGNIN_FAILURE: {
        return {
          ...state,
          inProgress: false,
          error: action.error
        };
      }
      default:
        return state;
    }
  };
  