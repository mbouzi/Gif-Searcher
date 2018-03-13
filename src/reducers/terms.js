import { STORE_TERMS, DISPLAY_TERM } from '../actions/types';

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
            const terms = !state.terms.includes(action.payload.trim()) ? [...state.terms, (action.payload.trim())] : state.terms
            
            return {
                ...state, terms: terms
            };
        default:
            return state;
    }
}
