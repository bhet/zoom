import axios from 'axios';

export const FETCH_REGISTER_READING = "FETCH_REGISTER_READING";
export const FETCH_REGISTER_READING_FAILED = "FETCH_REGISTER_READING_FAILED";



export const fetchRegisterReading = ()=>{
  return dispatch =>{
    axios.get(`http://localhost:8000/register/reading`)
      .then(response =>{
        console.log(" register response", response)
        dispatch({
          type: FETCH_REGISTER_READING,
          payload: response.data
        })
      }).catch(err=>{
        dispatch({
          type: FETCH_REGISTER_READING_FAILED,
          payload: err
        })
      })
  }
};
