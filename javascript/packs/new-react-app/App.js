import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QuotesList from "./QuotesList";

function App() {
  return (
    <Router>
      <QuotesList path="/" />
    </Router>
  );
}

export default App;
