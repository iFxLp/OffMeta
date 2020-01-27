import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import Login from "./components/login.component";
import Registration from "./components/registration.component";

import img from "./filler_picture.png"

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

          <section id="main">
          <div className="main-text">
            <span>Esports is better with friends</span> 
            <div className="p-text">
            <p>
              OffMeta is a fantasy esports league and chat all in one platform
              Have fun and enjoy esports with your closest friends
            </p>
            </div>
          </div>

          <img src={img} width="520" alt="leaf-main-image" />
        </section>
    </div></Router>
  );
}

export default App;
