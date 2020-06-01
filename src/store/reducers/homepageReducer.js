import * as types from '../types';

const initialState = {
  isLoading: false,
  userDetails: null,
  error: null
};

const defaultErrorMessage = 'Something went wrong';

export default (state = initialState, action) => {
  switch (action.type) {
    // Login Actions
    case types.REQUEST_LOGIN: return {
      ...state, isLoading: true
    };
    case types.LOGIN_SUCCESS: return {
      ...state, isLoading: false, userDetails: action.payload
    };
    case types.LOGIN_FAILURE: return {
      ...state, isLoading: false, error: action.payload.message || defaultErrorMessage
    };
    // Signup Actions
    case types.REQUEST_SIGNUP: return {
      ...state, isLoading: true
    };
    case types.SIGNUP_SUCCESS: return {
      ...state, isLoading: false, userDetails: action.payload
    };
    case types.SIGNUP_FAILURE: return {
      ...state, isLoading: false, error: action.payload.message || defaultErrorMessage
    };
    default: {
      console.log('INVALID HOMEPAGE REQUEST');
      return { ...state };
    }
  }
}