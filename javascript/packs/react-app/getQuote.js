import axios from 'axios';

function getQuote(id) {
	// might need headers when CORS is properly restricted?
	return axios.get(`/api/v1/quotes/${id}`);
}

export default getQuote;