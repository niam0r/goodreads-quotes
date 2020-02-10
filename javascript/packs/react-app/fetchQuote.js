import axios from 'axios';

function fetchQuote(id) {
	// might need headers when CORS is properly restricted?
	return axios.get(`/api/v1/quotes/${id}`);
}

export default fetchQuote;