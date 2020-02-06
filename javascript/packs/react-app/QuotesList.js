import axios from 'axios';
import React, { useEffect, useState } from 'react';
import renderQuote from './renderQuote';

export default function QuotesList() {
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
    <div className='container'>
      <br/>
        { quotes.map(quote => renderQuote(quote)) }
      <br/>
    </div>
  );
}