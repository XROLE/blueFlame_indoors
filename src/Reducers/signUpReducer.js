import {
  SIGNUP_IN_PROGRESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../actions/actionType';

const defaultState = {
  inProgress: false,
  user: '',
  error: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SIGNUP_IN_PROGRESS: {
      return {
        ...state,
        inProgress: true,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        inProgress: false,
        error: '',
        user: action.user
      };
    }
    case SIGNUP_FAILURE: {
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
