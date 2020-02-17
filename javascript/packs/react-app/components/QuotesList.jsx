import React, { useContext } from 'react';
import Quote from './Quote';
import { QuotesContext } from '../contexts/QuotesContext';

export default function QuotesList() {
  const { quotes } = useContext(QuotesContext);

  return (
    <div className='container'>
      <br/>
        { quotes.map(quote => <Quote key={quote.id} quote={quote} />) }
      <br/>
    </div>
  );
}