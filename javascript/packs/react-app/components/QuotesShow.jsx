import fetchQuote from '../services/fetchQuote';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quote from './Quote';
import { QuotesContext } from '../contexts/QuotesContext';

export default function QuotesShow() {
  const { id }  =  useParams();
  const { quotes } = useContext(QuotesContext);
  const [ quote, setQuote ] = useState({});

  useEffect(() => {
    const quoteFromContext = quotes.find(quote => quote.id === parseInt(id));
    setQuote(quoteFromContext);
  }, [quotes, id]);
  
  return ( 
    <Quote quote={quote}/> 
  );
}