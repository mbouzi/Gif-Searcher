import { STORE_TERMS, DISPLAY_TERM } from '../actions';

import { history } from './../store/configureStore';


const initialState =  {
    terms: []
};

export default function terms(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_TERM:
            return {
                ...state, term: action.payload
            };
        case STORE_TERMS:
            return {
                ...state, terms: state.terms.concat(action.payload)
            };
        default:
            return state;
    }
}
