import { SIGNUP_SUCCESS, SIGNUP_FAILED } from '../action/login';

let initailState = [];

export default (state = initailState, action) =>{
  switch(action.type){
    case SIGNUP_SUCCESS:
    return [...state, action.payload];
    case SIGNUP_FAILED:
    return action.payload;
    default:
    return state
  }
}
