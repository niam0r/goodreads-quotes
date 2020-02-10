import axios from 'axios';

function fecthQuotes() {
	// might need headers when CORS is properly restricted?
	return axios.get('/api/v1/quotes');
}

export default fecthQuotes;