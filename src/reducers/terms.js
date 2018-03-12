import { SAVE_TERMS } from '../actions';

import { history } from './../store/configureStore';


const initialState =  {
  terms: []
};

export default function terms(state = initialState, action) {
  console.log("ACTION:", action)
  switch (action.type) {
    case SAVE_TERMS:
    console.log("HIT2")
      return {
        ...state, terms: state.terms.concat(action.payload)
      };
    default:
      return state;
  }
}
