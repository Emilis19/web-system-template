import React from 'react';
import App from './App';
import BookList from './BookList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function A() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={App} />
        <Route exact path="/list" component={BookList} />
      </div>
    </Router>
  );

}
export default A;