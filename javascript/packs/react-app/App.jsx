import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuotesList from "./components/QuotesList";
import { QuotesProvider } from "./contexts/QuotesContext";
import QuotesShow from "./components/QuotesShow";

function App() {
  return (
    <Router>
      <Switch>
        <QuotesProvider>
          <Route path="/quotes/:id" component={QuotesShow}/>
          <Route path="/" component={QuotesList}/>
        </QuotesProvider>
      </Switch>
    </Router>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement("div"))
  );
});