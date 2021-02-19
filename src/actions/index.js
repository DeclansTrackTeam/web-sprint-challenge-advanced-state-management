
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
import axios from 'axios';

export const GET_SMURF_START = "GET_SMURF_START"
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS"
export const GET_SMURF_FAIL = "GET_SMURF_FAIL"

export const POST_SMURF_START = "POST_SMURF_START"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"
export const POST_SMURF_FAIL = "POST_SMURF_FAIL"
export const SUBMIT_ERROR = "SUBMIT_ERROR"

export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: GET_SMURF_START});
        axios  
            .get('http://localhost:3333/smurfs')
            .then((res) => {
                dispatch({type: GET_SMURF_SUCCESS, payload: res.data})
            })
            .catch(err => {
                console.log(err)
                dispatch({type: GET_SMURF_FAIL, payload: err.message})
            })
}

export const postSmurf = (newSmurf) => (dispatch) => {
    dispatch({type: POST_SMURF_START});
        axios  
            .post('http://localhost:3333/smurfs', newSmurf)
            .then((res) => {
                dispatch({type: POST_SMURF_SUCCESS, payload: res.data})
            })
            .catch(err => {
                console.log(err)
                dispatch({type: POST_SMURF_FAIL, payload: err.message})
            })
}

export const setError = (err) => (dispatch) => {
    dispatch({type: SUBMIT_ERROR, payload: err});

}