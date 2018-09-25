import axios from 'axios';

export const FETCH_ENTRY = "FETCH_ENTRY";
export const FETCH_ENTRY_FAILED = "FETCH_ENTRY_FAILED";
export const ADD_NEW_ENTRY = "ADD_NEW_ENTRY";
export const ADD_NEW_ENTRY_FAILED = "ADD_NEW_ENTRY_FAILED";
export const FILTER_TRANSACTION = "FILTER_TRANSACTION";

export const fetchEntry = ()=>{
  return dispatch =>{
    axios.get(`http://localhost:8000/cash/entry`)
      .then(response =>{
        dispatch({
          type: FETCH_ENTRY,
          payload: response.data
        })
      }).catch(err =>{
        dispatch({
          type: FETCH_ENTRY_FAILED,
          payload: err
        })
      })
  }
}

export const postEntry = (newentry) =>{
  let data = {
    extra_cash: newentry.extracash,
    register_reading: newentry.registerreading
  }
  return dispatch =>{
    axios.post(`http://localhost:8000/cash/entry/new`, data)
      .then(response =>{
        dispatch({
          type: ADD_NEW_ENTRY,
          payload: response.data
        })
      }).catch(err =>{
        dispatch({
          type: ADD_NEW_ENTRY_FAILED,
          payload: err
        })
      })
  }
}

export const filterTransaction = (transaction) =>{
  return dispatch =>{
    dispatch({
      type: FILTER_TRANSACTION,
      payload: transaction
    })
  }
}
