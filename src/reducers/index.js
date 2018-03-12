import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import TermsReducer from './terms'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  gifs: GifsReducer,
  terms: TermsReducer,
  router: routerReducer
});

export default rootReducer;