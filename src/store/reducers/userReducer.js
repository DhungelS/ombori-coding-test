import {
  FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR
} from '../actions/actionTypes'


const initialState = {
  usersData: [],
  pageInfo: {},
  err: null,
  loading: false
}

export default function (state = initialState, action) {

  switch (action.type) {

    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        usersData: [...usersData, action.payload.data],
        pageInfo: {currentPage: action.payload.page, totalPages: action.payload.total_pages}
      }
    case FETCH_USER_ERROR:
      return {
        ...state,
        err: action.payload
      }
    default:
      return state;
  }
}