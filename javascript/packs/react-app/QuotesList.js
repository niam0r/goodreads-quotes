import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function QuotesList() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const response = await axios.get('/api/v1/quotes');
      if (!ignore) setQuotes(response.data);
    }
    fetchData();
    return () => { ignore = true; }
  }, []);

  function renderQuotes() {
    return quotes.map((quote) => {
      return (
        <div key={quote.id}>
          <section className="quote">
            <blockquote>
              <p>{quote.content}</p>
            </blockquote>
            <div className="avatar-author-book">
              <img className="avatar-large" src={quote.author_img} alt={quote.author}/>
              <div className="author-book">
                <p><cite><strong>{quote.author}</strong></cite></p>
                <p><cite>{quote.book}</cite></p>
              </div>
              <Link to={`/quotes/${quote.id}`} >
                <i className="fas fa-link"></i>
              </Link>
            </div>
          </section>
        </div>
      );
    });
  }

  return (
    <div className='container'>
      <br/>
      {renderQuotes()}
      <br/>
    </div>
  );
}

export default QuotesList;