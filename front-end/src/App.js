import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


/* Layout */

/* Style */

import 'bootstrap/dist/css/bootstrap.min.css';

/* Landing */
import SignUp from './components/landing/SignUp';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
