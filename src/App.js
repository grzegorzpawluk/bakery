import logo from './logo.svg';
import React from 'react';
import './App.css';

import Nav from './Components/Nav';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Cakes from './Components/Cakes';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cakes" component={Cakes} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
