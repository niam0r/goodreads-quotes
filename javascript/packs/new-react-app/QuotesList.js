import axios from 'axios';
import React, { useEffect, useState } from 'react';

function QuotesList() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const response = await axios.get('/api/v1/quotes');
      if (!ignore) setQuotes(response.data);
    }

    fetchData();

    return () => { ignore = true; }
  }, []);

  return (
    quotes.map(quote => (
      <div>{quote.content}</div>
    ))
  );
}

export default QuotesList;