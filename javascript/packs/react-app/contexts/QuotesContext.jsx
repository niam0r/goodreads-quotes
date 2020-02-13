import fetchQuotes from '../services/fetchQuotes';
import React, { useContext, useEffect, useState } from 'react';

const QuotesContext = React.createContext({quotes: []});

function QuotesProvider({ children }) {
	const [ quotes, setQuotes ]  = useState([]);

  useEffect(() => {
    fetchQuotes().then(response => setQuotes(response.data));
  }, [])

	return (
		<QuotesContext.Provider value={{ quotes: quotes }}>
			{ children }
		</QuotesContext.Provider>
	)
}

export { QuotesContext, QuotesProvider };
