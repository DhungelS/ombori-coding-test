import axios from 'axios'

const BASE_URL = 'https://reqres.in/api/users?page=2'

export const fetchUsers = () => dispatch => {
    axios
    .get(BASE_URL)
    .then(res => {
        console.log(res);
    })
}