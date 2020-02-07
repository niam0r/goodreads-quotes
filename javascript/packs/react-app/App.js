import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuotesList from "./QuotesList";
import QuotesShow from "./QuotesShow";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/quotes/:id" component={QuotesShow}/>
        <Route path="/" component={QuotesList}/>
      </Switch>
    </Router>
  );
}
