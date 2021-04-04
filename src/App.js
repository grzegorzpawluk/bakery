import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Cakes from './components/Cakes';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <ScrollToTop />
        <Switch>
          <div className="main">
            <Route path="/" exact component={Home} />
            <Route path="/bakery" exact component={Home} />
            <Route path="/cakes" component={Cakes} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
