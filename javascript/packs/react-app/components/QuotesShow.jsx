import QuotesLinks from './QuotesLinks';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quote from './Quote';
import { QuotesContext } from '../contexts/QuotesContext';

export default function QuotesShow() {
  const id = parseInt(useParams().id);
  const { quotes } = useContext(QuotesContext);
  const [ quote, setQuote ] = useState({});
  
  useEffect(() => {
    const quoteFromContext = quotes.find(quote => quote.id === id);
    setQuote(quoteFromContext);
  }, [quotes, id]);
  
  return ( 
    <div className='container'>

      <QuotesLinks quotes={quotes} currentId={id}/>

      <Quote quote={quote}/>
  
    </div>
  );
}