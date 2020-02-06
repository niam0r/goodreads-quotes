import Example from "./Example";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QuotesList from "./QuotesList";
import QuotesShow from "./QuotesShow";

import getQuotes from './getQuotes';

export default function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/quotes/:id" component={QuotesShow}/> */}
        <Route path="/" component={QuotesList}/>
      </Switch>
    </Router>
  );
}
