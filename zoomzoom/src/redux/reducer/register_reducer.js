import {
  FETCH_REGISTER_READING,
  FETCH_REGISTER_READING_FAILED
} from '../action/reg_reading_action';

let initialState = [];

export default (state = initialState, action) =>{
  switch(action.type){
    case FETCH_REGISTER_READING:
    return [...action.payload];

    case FETCH_REGISTER_READING_FAILED:
    return action.payload

    default:
    return state;
  }
}
