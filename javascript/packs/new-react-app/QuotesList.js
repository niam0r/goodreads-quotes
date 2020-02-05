import axios from 'axios';
import React, { useEffect, useState } from 'react';

function QuotesList() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios.get('/api/v1/quotes');
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