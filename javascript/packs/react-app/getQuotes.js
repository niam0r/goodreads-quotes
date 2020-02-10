import axios from 'axios';

function getQuotes() {
	// might need headers when CORS is properly restricted?
	return axios.get('/api/v1/quotes');
}

export default getQuotes;