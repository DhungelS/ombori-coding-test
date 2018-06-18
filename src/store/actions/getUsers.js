import axios from 'axios'
import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR} from './actionTypes'

const BASE_URL = 'https://reqres.in/api/users?page=2'

export const fetchUsers = () => dispatch => {
    dispatch({type: FETCH_USER_REQUEST})
    axios
    .get(BASE_URL)
    .then(res => {
        console.log(res.data.data)
        dispatch({ type: FETCH_USER_SUCCESS, payload: res.data.data })

})
    .catch(err => dispatch({ type: FETCH_USER_ERROR, payload: err }));
}