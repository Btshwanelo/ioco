import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Help from './pages/Help';
import Personal from './pages/Personal';
import Products from './pages/Products';
import Card from './components/Card/Card';
function App() {
  return (
    <Router>
      <Navbar />
      <Card />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/help' component={Help} />
        <Route path='/personal' component={Personal} />
        <Route path='/products' component={Products} />
      </Switch>
    </Router>
  );
}

export default App;