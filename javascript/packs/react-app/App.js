import Example from "./Example";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QuotesList from "./QuotesList";

import getQuotes from './getQuotes';

function App() {
  return (
    <div>
      <QuotesList/>
    </div>
  );
}

export default App;
