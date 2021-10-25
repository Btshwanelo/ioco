import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/css/main.css";
import "./styles/ReactSlickTheme.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="slider">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
