import { Link } from 'react-router-dom';
import React from 'react';

export default function QuotesLinks({quotes, currentId}) {
	console.log('currentId:', currentId);
	
	let previousId = (currentId - 1);
	console.log('previousId', previousId);
	
	let nextId = (currentId + 1);
	console.log('nextId', nextId);

	const quotesIds = quotes.map(quote => quote.id);
	console.log(quotesIds);
	
	const firstId = Math.min(...quotesIds);
	console.log('firstId:', firstId);

	const lastId = Math.max(...quotesIds);
	console.log('lastId:', lastId);

  if (currentId === firstId) {
		previousId = lastId;
	}

	if (currentId === lastId) {
		nextId = firstId;
	}

	return (
		<div key={currentId} style={{textAlign: 'center'}}>
			<Link to={'/quotes/' + previousId}>
				<i className="fas fa-chevron-left"></i> Previous
			</Link>
			<i class="fas fa-grip-lines-vertical"></i>
			<Link to='/quotes'>
				Back to all quotes
			</Link>
			<i class="fas fa-grip-lines-vertical"></i>
			<Link to={'/quotes/' + nextId}>
				Next <i class="fas fa-chevron-right"></i>
			</Link>
		</div>
	);
}