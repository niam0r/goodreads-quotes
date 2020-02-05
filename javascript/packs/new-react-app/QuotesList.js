import React, { useEffect, useState } from 'react';

function QuotesList() {
  const [quotes, setQuotes] = useState(0);

  useEffect(() => {
    const requestQuotes = async () => {
      const response = await fetch('/api/v1/quotes');
      const { data } = await response.json();
      setQuotes(data);
    };
    requestQuotes();
  }, []);

  console.log(quotes)

  return quotes.map(quote => <div>{quote.content}</div>);
}

export default QuotesList;
