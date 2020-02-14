import fetchQuote from '../services/fetchQuote';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quote from './Quote';
import { QuotesContext } from '../contexts/QuotesContext';

export default function QuotesShow() {
  const { id }  = useParams();
  console.log('id:', id);
  
  const { quotes } = useContext(QuotesContext);
  console.log('quotes:', quotes);

  // const quote = quotes.find(quote => quote.id === id );

  const [ quote, setQuote ] = useState([]);

  useEffect(() => {
    const quoteFromId = quotes.find(quote => quote.id === id);
    console.log('quoteFromId:', quoteFromId);
    setQuote(quoteFromId);
  }, []);


  // What if quote is undefined?
  return ( 
    <Quote quote={quote}/> 
  );

  // TODO
  // else
  // > fetch from api
  // const [quoteToSet, setQuote] = useState([]);

	// useEffect(() => {
    // fetchQuote(id).then(response => setQuote(response.data));
  // }, []);
  
  // return Quote(quoteToSet);
}