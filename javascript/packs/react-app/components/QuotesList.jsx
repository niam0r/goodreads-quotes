import React, { useContext, useEffect, useState } from 'react';
import Quote from '../components/Quote';
import { QuotesContext } from '../contexts/QuotesContext';

export default function QuotesList() {
  const { quotes } = useContext(QuotesContext);

  return (
    <div className='container'>
      <br/>
        { quotes.map(quote => Quote(quote)) }
      <br/>
    </div>
  );
}