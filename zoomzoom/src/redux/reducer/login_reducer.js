import { LOGIN_SUCCESS, LOGIN_FAILED } from '../action/login';


let initailState = [];

export default (state = initailState, action) =>{
  switch (action.type) {
    case LOGIN_SUCCESS:
    return [...state, action.payload];
    case LOGIN_FAILED:
    return action.payload
    default:
    return state;

  }
}
