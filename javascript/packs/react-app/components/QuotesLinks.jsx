import { Link } from 'react-router-dom';
import React from 'react';

export default function QuotesLinks({ quotes, currentId }) {
	let previousId = (currentId - 1);
	let nextId = (currentId + 1);
	const quotesIds = quotes.map(quote => quote.id);
	const firstId = Math.min(...quotesIds);
	const lastId = Math.max(...quotesIds);

  if (currentId === firstId) {
		previousId = lastId;
	}

	if (currentId === lastId) {
		nextId = firstId;
	}

	return (
		<div key={currentId} style={{textAlign: 'center'}}>
			<Link to={'/quotes/' + previousId}>
				<i className="fas fa-chevron-left"></i>&nbsp;Previous&nbsp;
			</Link>
			<i className="fas fa-grip-lines-vertical"></i>
			<Link to='/quotes'>
			&nbsp;Back to all quotes&nbsp;
			</Link>
			<i className="fas fa-grip-lines-vertical"></i>
			<Link to={'/quotes/' + nextId}>
			&nbsp;Next&nbsp;<i className="fas fa-chevron-right"></i>
			</Link>
		</div>
	);
}