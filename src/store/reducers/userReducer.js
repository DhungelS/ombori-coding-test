const initialState = {
    usersData: [],
  err: null,
  loading: false
  }
  
  export default function(state = initialState, action) {
  
    switch (action.type) {
      case 'FETCH_USER REQUEST':
        return {
          ...state,
          loading: true
        }
      case 'FETCH_USER_SUCCESS':
        return {
          ...state,
          usersData: [...state.usersData, action.payload]
        }
        case'FETCH_USER_ERROR':
        return {
          ...state,
          err:action.payload
        }
      default:
        return state;
    }
  }