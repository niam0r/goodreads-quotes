import React, { useEffect, useState } from 'react';

function QuotesList() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const requestQuotes = async () => {
      const response = await fetch('/api/v1/quotes');
      const { data } = await response.json();
      setQuotes(data);
    };
    requestQuotes();
  }, []);

  return quotes.map(quote => <div>{quote.content}</div>);
}

export default QuotesList;
