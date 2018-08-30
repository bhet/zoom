import axios from  'axios';

export const FETCH_CASHIN_FLOW = "FETCH_CASHIN_FLOW";
export const FETCH_CASHIN_FLOW_FAILED = "FETCH_CASHIN_FLOW_FAILED";

export const fetchTotal = ()=>{
  return dispatch =>{
    axios.get(`http://localhost:8000/total/inflow`)
      .then(response =>{
        dispatch({
          type: FETCH_CASHIN_FLOW,
          payload: response.data
        })
      }).catch(err =>{
        dispatch({
          type: FETCH_CASHIN_FLOW_FAILED,
          payload: err
        })
      })
  }
}
