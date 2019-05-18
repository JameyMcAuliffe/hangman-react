import axios from 'axios';

const url = 'https://api.wordnik.com/v4/words.json/randomWord?minLength=7&maxLength=10&api_key=';
const apiKey = '7e030b3c0b2473617800d00926c0c8f49c00b044b2a0b1d55'

const getWord = () => {
	return axios.get(`${url}${apiKey}`);
}

export {getWord};

