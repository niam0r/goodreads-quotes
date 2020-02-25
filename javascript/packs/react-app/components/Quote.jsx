import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Quote({ quote }) {
	if (!quote || !quote.id) {
		return <p>Loading...</p>;
	}
	const { author, author_img, book_img, book_title, content, id } = quote;

	const singleQuote = Boolean(useParams().id);

	function linkToSingleQuote() {
		return (
			<Link to={`/quotes/${id}`} >
				<i className="fas fa-link"></i>
			</Link>
		)
	}

	return (
		<div key={id}>
			<section className="quote">
				<blockquote>
					<p>{content}</p>
				</blockquote>
				<div className="avatar-author-book">
					<img className="avatar-large" src={book_img} alt={book_title}/>
					<div className="author-book">
						<p><cite><strong>{author}</strong></cite></p>
						<p><cite>{book_title}</cite></p>
					</div>
					{ !singleQuote ? linkToSingleQuote() : null }
				</div>
			</section>
		</div>
	);
};
