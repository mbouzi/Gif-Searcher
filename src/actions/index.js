import axios from 'axios'
import { STORE_TERMS, DISPLAY_TERM, REQUEST_GIFS,REQUEST_RANDOM_GIF, REQUEST_GIF, REQUEST_TRENDING_GIFS } from './types';


const API_URL = 'http://api.giphy.com/v1/gifs/';
const API_KEY = 'api_key=RiGduUrtLWz4x36dI6ARDS8RkOZA7nDv';

export function storeTerms(term = null) {
	return {
		type: STORE_TERMS,
		payload: term
	}
}

export function displayTerm(term = null) {

	return {
		type: DISPLAY_TERM,
		payload: term
	}
}


export function requestGifs(term = null) {

	const data = axios.get(`${API_URL}?q=${term}&${API_KEY}`);

	return {
	    type: REQUEST_GIFS,
	    payload: data
	}
}

export function requestTrendingGifs() {

	const data = axios.get(`${API_URL}trending?${API_KEY}`);

	return {
	    type: REQUEST_TRENDING_GIFS,
	    payload: data
	}
}

export function requestRandomGif() {

	const data = axios.get(`${API_URL}random?${API_KEY}`);

	return {
	    type: REQUEST_RANDOM_GIF,
	    payload: data
	}
}



export function requestGif(id = null) {

	const data = axios.get(`${API_URL}/${id}?${API_KEY}`);

	return {
	    type: REQUEST_GIF,
	    payload: data
	}
}
