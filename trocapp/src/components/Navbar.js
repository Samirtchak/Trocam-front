import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Login from '../pages/Login';

import './style/styles.css'

const Navbar = () => {
    return (
        <Router>
        <div >
            <nav className="nav">
                <ul>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    
                
                </ul>
            </nav>
            <Switch>
                 <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            </div>

    </Router>

    )
}

export default Navbar;