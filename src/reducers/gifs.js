import { REQUEST_GIFS,REQUEST_RANDOM_GIF, REQUEST_GIF, REQUEST_TRENDING_GIFS } from '../actions';

import { history } from './../store/configureStore';


const initialState =  {
    data: []
};

export default function gifs(state = initialState, action) {
    switch (action.type) {
        case REQUEST_GIFS:
        case REQUEST_TRENDING_GIFS:
        // case REQUEST_RANDOM_GIF: 
        // case REQUEST_GIF:
            return {
              ...state, data: action.payload.data
            };
        default:
            return state;
    }
}
