import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuotesShow extends Component {
  componentDidMount() {
    if (!this.props.quote) {
      this.props.fetchQuote(this.props.match.params.id);
    }
  }
  render() {
    const quote = this.props.quote;
    if (!quote) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <section className="quote">
          <blockquote>
            <p>{quote.content}</p>
          </blockquote>
          <div className="avatar-author-book">
            <img className="avatar-large" src={quote.author_img}/>
            <div className="author-book">
              <p><cite><strong>{quote.author}</strong></cite></p>
              <p><cite>{quote.book}</cite></p>
            </div>
          </div>
        </section>
        <div className="text-center">
          <Link className="btn btn-primary btn-cta" to="/">
            Back to all quotes
          </Link>
        </div>
      </div>
    );
  }
}

export default QuotesShow;