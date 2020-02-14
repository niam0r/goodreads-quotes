import fetchQuote from '../services/fetchQuote';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quote from './Quote';
import { QuotesContext } from '../contexts/QuotesContext';

export default function QuotesShow() {
  const { id }  =  useParams();
  console.log('id:', id);
  
  const { quotes } = useContext(QuotesContext);
  console.log('quotes:', quotes);

  // const quote = quotes.find(quote => quote.id === id );

  const [ quote, setQuote ] = useState({});

  useEffect(() => {
    const quoteFromContext = quotes.find(quote => quote.id === parseInt(id));
    console.log('quoteFromContext:', quoteFromContext);
    setQuote(quoteFromContext);
  }, [quotes, id]);
  
  return ( 
    <Quote quote={quote}/> 
  );
}