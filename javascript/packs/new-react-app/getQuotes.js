import axios from 'axios';

function getQuotes() {
	async function fetchData() {
		const response = await axios.get('/api/v1/quotes');
		if (!ignore) setQuotes(response.data);
	}

  fetchData();
}

export default getQuotes;