const defaultState = {
  inProgress: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SIGNUP_IN_PROGRESS':
      return {
        ...state,
        inProgress: true,
      }
      default:
        return state;
  }
}
