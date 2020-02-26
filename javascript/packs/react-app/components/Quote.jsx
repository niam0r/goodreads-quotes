import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Quote({ quote }) {
	if (!quote || !quote.id) {
		return <p>Loading...</p>;
	}
	const {
		author,
		book_img,
		book_title,
		book_url,
		content,
		goodreads_quote_url,
		id } = quote;

	console.log("book_url", book_url);
	console.log("goodreads_quote_url", goodreads_quote_url);

	const singleQuote = Boolean(useParams().id);

	function linkToSingleQuote() {
		return (
			<Link to={`/quotes/${id}`} >
				<i className="fas fa-link"></i>
			</Link>
		)
	}

	function linkedTitle() {
		return ( <Link to={book_url}>{book_title}</Link> );
	}

	return (
		<div key={id}>
			<section className="quote">
				<blockquote>
					<p>{content}</p>
				</blockquote>
				<div className="avatar-author-book">
					{/* <img className="avatar-large" src={book_img} alt={book_title}/> */}
					<div className="author-book">
						<p><cite><strong>{author}</strong></cite></p>
						<p><cite>{ book_url ? linkedTitle() : book_title }</cite></p>
					</div>
					{ !singleQuote ? linkToSingleQuote() : null }
				</div>
			</section>
		</div>
	);
};
