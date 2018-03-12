import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  gifs: GifsReducer,
  router: routerReducer
});

export default rootReducer;