import React from 'react';
import { Link } from 'react-router-dom';

export default function Quote(quote) {
	const { author, author_img, book, content, id } = quote;

	if (!quote) {
    return <p>Loading...</p>;
	}

	return (
		<div key={id}>
			<section className="quote">
				<blockquote>
					<p>{content}</p>
				</blockquote>
				<div className="avatar-author-book">
					<img className="avatar-large" src={author_img} alt={author}/>
					<div className="author-book">
						<p><cite><strong>{author}</strong></cite></p>
						<p><cite>{book}</cite></p>
					</div>
					{/* Show link to back when showing a single quote */}
					<Link to={`/quotes/${id}`} >
						<i className="fas fa-link"></i>
					</Link>
				</div>
			</section>
		</div>
	);
};
