import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

import './scss/style.scss';

import Article from './pages/Article/Article'


function App() {
  return (
    <Router>
      <Article></Article>
      <Switch>
        <Route path="/" />
      </Switch> 
    </Router>)
}

export default App;
