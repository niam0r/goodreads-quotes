import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:3000/api/v1';

function QuotesList() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios.get(`${BASE_URL}/quotes`);
      if (!ignore) setQuotes(result.data);
    }

    fetchData();
    return () => { ignore = true; }
  }, []);

  return (
    <ul>
      {quotes.map(quote => (
        <div>{quote.content}</div>
      ))}
    </ul>
  );
}

export default QuotesList;