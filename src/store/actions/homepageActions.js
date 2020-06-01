import * as types from '../types';

// Login Actions
export const requestLogin = (payload) => ({type: types.REQUEST_LOGIN, payload});
export const successLogin = (payload) => ({type: types.LOGIN_SUCCESS, payload});
export const failureLogin = (payload) => ({type: types.LOGIN_FAILURE, payload});

// Signup Actions
export const requestSignup = (payload) => ({type: types.REQUEST_SIGNUP, payload});
export const successSignup = (payload) => ({type: types.SIGNUP_SUCCESS, payload});
export const failureSignup = (payload) => ({type: types.SIGNUP_FAILURE, payload});