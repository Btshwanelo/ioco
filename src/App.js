import React from 'react';
import './styles/css/main.css'
import './styles/ReactSlickTheme.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/' component={Home} />
        <Route path='/' component={Home} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;