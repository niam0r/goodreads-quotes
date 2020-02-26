import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Quote({ quote }) {
	if (!quote || !quote.id) {
		return <p>Loading...</p>;
	}
	const {
		author,
		author_img,
		book_img,
		book_title,
		book_url,
		content,
		goodreads_quote_url,
		id } = quote;

	const singleQuote = Boolean(useParams().id);

	function linkedTitle() {
		return (
			<a href={book_url} target="_blank" rel='noreferrer noopener'>{book_title}</a>
		);
	}

	function linkToSingleQuote() {
		return (
			<Link to={`/quotes/${id}`} >
				<i className="fas fa-link"></i>
			</Link>
		);
	}

	return (
		<div key={id}>
			<section className="quote">
				<blockquote>
					<p>{content}</p>
				</blockquote>
				<div className="avatar-author-book">
					<img
						className="avatar-large"
						src={book_img ? book_img : author_img }
						alt={book_img ? book_title : author}
					/>
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
