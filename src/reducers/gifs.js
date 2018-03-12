import { REQUEST_GIFS,REQUEST_RANDOM_GIF, REQUEST_GIF, REQUEST_TRENDING_GIFS } from '../actions';


const initialState =  {
    data: []
};

export default function gifs(state = initialState, action) {
  console.log("ACTION:", action)
    switch (action.type) {
        case REQUEST_GIFS:
        case REQUEST_TRENDING_GIFS:
            return {
              ...state, data: action.payload.data
            };
        case REQUEST_RANDOM_GIF: 
        case REQUEST_GIF:
            return {
              ...state, data: action.payload.data.data
            };
        default:
            return state;
    }
}
