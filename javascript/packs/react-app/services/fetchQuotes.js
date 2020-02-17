import axios from 'axios';

export default function fecthQuotes() {
	// might need headers when CORS is properly restricted?
	return axios.get('/api/v1/quotes');
}