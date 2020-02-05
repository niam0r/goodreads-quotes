import axios from 'axios';

function getQuotes() {
	async function fetchData() {
		const response = await axios.get('/api/v1/quotes');
		return response.data;
	}

  return fetchData();
}

export default getQuotes;