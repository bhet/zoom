import {
  FETCH_CASHIN_FLOW,
  FETCH_CASHIN_FLOW_FAILED
} from '../action/total_inflow_action';


let initialState = [];

export default (state = initialState, action) =>{
  switch(action.type){
    case FETCH_CASHIN_FLOW:
    return [...action.payload];
    case FETCH_CASHIN_FLOW_FAILED:
    return action.payload;
    default:
    return state
  }
}
