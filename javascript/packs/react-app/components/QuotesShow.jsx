import fetchQuote from '../services/fetchQuote';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quote from '../components/Quote';
import { QuotesContext } from '../contexts/QuotesContext';

export default function QuotesShow() {
  const { id }  = useParams();
  console.log('id:', id);
  
  const { quotes } = useContext(QuotesContext);
  console.log(quotes);

  const quote =  quotes.find(quote => quote.id === id);

  // What if quote is undefined?
  return Quote(quote);

  // TODO
  // else
  // > fetch from api
  // const [quoteToSet, setQuote] = useState([]);

	// useEffect(() => {
    // fetchQuote(id).then(response => setQuote(response.data));
  // }, []);
  
  // return Quote(quoteToSet);
}