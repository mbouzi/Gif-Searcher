import axios from 'axios'

export const REQUEST_GIFS = 'REQUEST_GIFS';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=RiGduUrtLWz4x36dI6ARDS8RkOZA7nDv';

export function requestGifs(term = null) {

	const data = axios.get(`${API_URL}${term}${API_KEY}`);

	return {
	    type: REQUEST_GIFS,
	    payload: data
	}
}