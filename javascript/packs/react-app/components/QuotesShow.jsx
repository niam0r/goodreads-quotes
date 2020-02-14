import fetchQuote from '../services/fetchQuote';
import { Link } from 'react-router-dom';
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
    <div className='container'>
      <div style={{'text-align': 'center'}}>
        <Link to='/quotes'>
          <i className="fas fa-long-arrow-alt-left"></i>
          Back to all quotes
        </Link>
      </div>
      <Quote quote={quote}/>
    </div>
  );
}