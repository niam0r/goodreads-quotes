import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import renderQuote from './renderQuote';

export default function QuotesShow() {
  const [quote, setQuote] = useState([]);
  const { id }  = useParams();
  
  // if quote is in the quotes passed down from QuotesList
  // > get it from the state
  // else
  // > fetch from api

	useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/api/v1/quotes/${id}`);
      setQuote(response.data);
    }
    fetchData();
  }, []);
  
  return renderQuote(quote);
}