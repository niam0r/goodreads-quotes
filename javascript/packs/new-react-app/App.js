import Example from "./Example";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QuotesList from "./QuotesList";

function App() {
  return (
    <div>
      <h1>React App</h1>
      {/* <GetQuotes/> */}
      {/* <Example/> */}
      <QuotesList/>
    </div>
  );
}

export default App;
