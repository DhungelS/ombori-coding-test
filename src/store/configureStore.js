import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
  users: userReducer
  });



  const middlewares =[thunk]

  let composeEnhancers = compose;

  const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
  };

  export default configureStore;
