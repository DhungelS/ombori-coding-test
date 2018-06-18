const initialState = {
    userData: null,
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
          userData:
        }
        case'FETCH_USER_ERROR':
        return {
          ...state,
          reviewData: [...state.reviewData, action.payload]
        }
        
      default:
        return state;
    }
  }