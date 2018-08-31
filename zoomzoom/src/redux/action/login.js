import axios from 'axios';

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILED = "SIGNUP_FAILED";

export const submitLogin = (email, password) =>{
  return dispatch =>{
    axios.post(`http://localhost:8000/user/login`)
      .then(response =>{
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data
        })
      }).catch(err =>{
        dispatch({
          type: LOGIN_FAILED,
          payload: err
        })
      })
  }
}

export const userSignup = (newUser) =>{
  return dispatch =>{
    axios.post(`http://localhost:8000/user/create`)
      .then(response =>{
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: response.data
        })
      }).catch(err =>{
        dispatch({
          type: SIGNUP_FAILED,
          payload: err
        })
      })
  }
}
