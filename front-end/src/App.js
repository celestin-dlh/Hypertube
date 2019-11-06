import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
/* Layout */

/* Style */

import 'bootstrap/dist/css/bootstrap.min.css';

/* Landing */
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Jwt from './components/auth/Jwt';
import ForgetPassword from './components/auth/ForgetPassword';
import ResetPassword from './components/auth/ResetPassword';

import Settings from './components/userProfile/Settings';

// import ChangeLanguage from './components/services/ChangeLanguage';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* notifications */}
      <ReactNotification />

      {/* change language button */}
      {/* <ChangeLanguage /> */}
        <Router>
          <Switch>            
            <Route exact path="/login">
              <Login />
            </Route>               
            {/*  passport 42 google*/}
            <Route exact path="/jwt/:token" >
              <Jwt />
            </Route>
            <Route exact path="/forgetpassword">
              <ForgetPassword />
            </Route>
            <Route exact path="/resetpassword/:token" >
              <ResetPassword />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
            <Route path="/">
              <Register />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
