import { LOGIN_SUCCESS, LOGIN_FAILED } from '../action/login';


let initailState = {token: null};

export default (state = initailState, action) =>{
  switch (action.type) {
    case LOGIN_SUCCESS:
    localStorage.setItem('token', action.payload.token);
    return {token: action.payload.token};
    case LOGIN_FAILED:
    return action.payload
    default:
    return state;

  }
}
