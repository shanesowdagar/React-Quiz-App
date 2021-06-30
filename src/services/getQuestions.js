import axios from 'axios';

const BASE_URL = 'https://opentdb.com/api.php';

//amount=10&category=11&difficulty=medium&type=boolean

export default function getQuestions(amount = 10, category, difficulty, type) {
	let constructed_url = BASE_URL;

	constructed_url += `?amount=${amount}`;

	if (category !== 'any') constructed_url += `&category=${category}`;

	constructed_url += `&difficulty=${difficulty}`;

	constructed_url += `&type=${type}`;

	// let calUrl = `${URL}?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`;
	console.log('URL =', constructed_url);
	return axios.get(constructed_url);
}
