import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


/* Layout */

/* Style */

import 'bootstrap/dist/css/bootstrap.min.css';

/* Landing */
import SignUp from './components/landing/SignUp';
import SignIn from './components/landing/SignIn';
import ForgetPassword from './components/landing/ForgetPassword';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>            
            <Route exact path="/signin">
              <SignIn />
            </Route>            
            <Route exact path="/forgetpassword">
              <ForgetPassword />
            </Route>
            <Route path="/">
              <SignUp />
            </Route>

          </Switch>
        </Router>
    </div>
  );
}

export default App;
