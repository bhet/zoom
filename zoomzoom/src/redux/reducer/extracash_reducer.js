import {
  FETCH_ENTRY,
  FETCH_ENTRY_FAILED,
  ADD_NEW_ENTRY,
  ADD_NEW_ENTRY_FAILED } from '../action/extracash_action';


let initialState = [];

export default (state = initialState, action) =>{
  switch(action.type){

    case FETCH_ENTRY:
    return [...action.payload];
    case FETCH_ENTRY_FAILED:
    return action.payload;

    case ADD_NEW_ENTRY:
    return [...state, action.payload];
    case ADD_NEW_ENTRY_FAILED:
    return action.payload;

    default:
    return state
  }
}
