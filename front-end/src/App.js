import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


/* Layout */

/* Style */

import 'bootstrap/dist/css/bootstrap.min.css';

/* Landing */
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import ForgetPassword from './components/auth/ForgetPassword';
import ResetPassword from './components/auth/ResetPassword';
import Profile from './components/userProfile/Profile';
import Edit from './components/userProfile/Edit';

import Jwt from './components/auth/Jwt';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>            
            <Route exact path="/signin">
              <SignIn />
            </Route>               
            {/*  passport 42 google*/}
            <Route exact path="/jwt/:token" render={Jwt} />
            <Route exact path="/forgetpassword">
              <ForgetPassword />
            </Route>                
            <Route exact path="/resetpassword/:token" render={ResetPassword} />
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/edit">
              <Edit />
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
