import axios from 'axios'

export const REQUEST_GIFS = 'REQUEST_GIFS';
export const REQUEST_RANDOM_GIF = 'REQUEST_RANDOM_GIF';
export const REQUEST_GIF = 'REQUEST_GIF';

export function requestGifs(term = null) {

	const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
	const API_KEY = '&api_key=RiGduUrtLWz4x36dI6ARDS8RkOZA7nDv';

	const data = axios.get(`${API_URL}${term}${API_KEY}`);

	return {
	    type: REQUEST_GIFS,
	    payload: data
	}
}

export function requestRandomGif() {

	const API_URL = 'http://api.giphy.com/v1/gifs/random?q=';
	const API_KEY = '&api_key=RiGduUrtLWz4x36dI6ARDS8RkOZA7nDv';


	const data = axios.get(`${API_URL}${API_KEY}`);
	console.log("FUNTIONaDATA:", data)
	return {
	    type: REQUEST_RANDOM_GIF,
	    payload: data
	}
}

export function requestGif(id = null) {

	const API_URL = 'http://api.giphy.com/v1/gifs/random?q=';
	const API_KEY = '&api_key=RiGduUrtLWz4x36dI6ARDS8RkOZA7nDv';


	const data = axios.get(`${API_URL}${id}${API_KEY}`);
	console.log("FUNTIONaDATA:", data)
	return {
	    type: REQUEST_GIF,
	    payload: data
	}
}
