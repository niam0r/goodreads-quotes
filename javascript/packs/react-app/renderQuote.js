import React from 'react';
import { Link } from 'react-router-dom';

export default function renderQuote(props) {
	const quote = props;

	if (!quote) {
    return <p>Loading...</p>;
	}
	
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
};
