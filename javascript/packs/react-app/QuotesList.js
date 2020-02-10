import fetchQuotes from './fetchQuotes';
import React, { useEffect, useState } from 'react';
import renderQuote from './renderQuote';

export default function QuotesList() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes().then(response => setQuotes(response.data));
  }, []);
  
  return (
    <div className='container'>
      <br/>
        { quotes.map(quote => renderQuote(quote)) }
      <br/>
    </div>
  );
}