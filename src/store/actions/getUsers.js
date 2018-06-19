import axios from 'axios'
import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR} from './actionTypes'



export const fetchUsers = (PAGE_URL) => dispatch => {
    dispatch({type: FETCH_USER_REQUEST})
    axios
    .get(PAGE_URL)
    .then(res => {
        dispatch({ type: FETCH_USER_SUCCESS, payload: res.data })

})
    .catch(err => dispatch({ type: FETCH_USER_ERROR, payload: err }));
}