import React from 'react';
import './styles/css/main.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Help from './pages/Help';
import Personal from './pages/Personal';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Navbar />
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