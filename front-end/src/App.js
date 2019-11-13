import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

/* Style */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Landing */
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Jwt from './components/auth/Jwt';
import ForgetPassword from './components/auth/ForgetPassword';
import ResetPassword from './components/auth/ResetPassword';

import Profile from './components/userProfile/Profile';
import Settings from './components/userProfile/Settings';

import Movie from './components/movie/movie';
import SearchMovies from './components/movie/searchMovies';
import SearchActor from './components/movie/searchActor';

// import ChangeLanguage from './components/services/ChangeLanguage';
import './App.css';


function getJwt() {
    const token = localStorage.getItem('token');
    if (token) {
        return true;
    } else {
        return false;
    }
}

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>                    
                    <Route exact path="/movie/:id">
                        <Movie />
                    </Route>
                    <Route exact path="/search/:search">
                        <SearchMovies />
                    </Route>
                    <Route exact path="/actor/:actorId">
                        <SearchActor />
                    </Route>
                    <Route exact path="/jwt/:token" >
                        <Jwt />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/forgetpassword">
                        <ForgetPassword />
                    </Route>
                    <Route exact path="/resetpassword/:token" >
                        <ResetPassword />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>

                    <Route exact path="/profile/:username" render={() => ( getJwt() ? ( <Profile/> ) : ( <Redirect to="/login" /> ) )} />
                    <Route exact path="/settings" render={() => ( getJwt() ? ( <Settings/> ) : ( <Redirect to="/login" /> ) )} />

                    <Route path="/">
                        <Profile />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
