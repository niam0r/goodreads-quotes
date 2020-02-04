// external modules
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router-dom';
// import { createHistory as history } from 'history/createBrowserHistory';
require("history").createBrowserHistory;

// internal modules
import QuotesIndex from './containers/quotes_index';
import QuotesShow from './containers/quotes_show';

// state and reducers
import quotesReducer from './reducers/quotes_reducer';

const reducers = combineReducers({
  quotes: quotesReducer
});

const quotesContainer = document.getElementById('quotes');
const initialState = { quotes: JSON.parse(quotesContainer.dataset.quotes) };

// middlewares
const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/quotes-react/" exact component={QuotesIndex} />
        <Route path="/quotes-react/:id" component={QuotesShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('quotes')
);

