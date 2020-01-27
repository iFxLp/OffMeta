import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import Login from "./components/login.component";
import Registration from "./components/registration.component";
import Landing from "./components/landing.component"

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"} style={{color: '#fff'}}>OffMeta</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"} style={{color: '#fff'}}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/registration"} style={{color: '#fff'}}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
          </Switch>

    </div></Router>
  );
}

export default App;
