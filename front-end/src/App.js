import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


/* Layout */
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Router>


        </Router>
      <Footer />
    </div>
  );
}

export default App;
