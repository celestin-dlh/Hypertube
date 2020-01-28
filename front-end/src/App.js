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

import Landing from './components/movie/landing';
import Movie from './components/movie/movie';
import Genre from './components/movie/genre';
import SearchActor from './components/movie/searchActor';
import SearchMovies from './components/movie/searchMovies';
import Streaming from './components/movie/streaming';


import './App.css';
import Header from "./components/templates/Header";

// .env
require('dotenv').config();

function getJwt() {
    const token = localStorage.getItem('token');
    return !!token;
}

function App() {
    return (
        <div className="App">
            <Router>
                {getJwt() ? ( <Header/> ) : null}
                <Switch>
                    {/* MOVIE PART */}
                    <Route path="/movie/:id/:lang?" render={() => ( getJwt() ? ( <Movie /> ) : ( <Redirect to="/login" /> ) )} />
                    <Route path="/search/:search/:lang?/:sortBy?" render={() => ( getJwt() ? ( <SearchMovies /> ) : ( <Redirect to="/login" /> ) )} />
                    <Route path="/actor/:actorId/:lang?" render={() => ( getJwt() ? ( <SearchActor /> ) : ( <Redirect to="/login" /> ) )} />
                    <Route exact path="/genre/:genreId" render={() => ( getJwt() ? ( <Genre exact path="/genre/:genreId"/> ) : ( <Redirect to="/login" /> ) )} />
                    <Route path="/streaming/:imdb_id/:quality?" render={() => ( getJwt() ? ( <Streaming /> ) : ( <Redirect to="/login" /> ) )} />
                    {/* AUTH PART */}
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
                    {/* USER PATH */}
                    <Route exact path="/profile/:username?" render={() => ( getJwt() ? ( <Profile/> ) : ( <Redirect to="/login" /> ) )} />
                    <Route exact path="/settings" render={() => ( getJwt() ? ( <Settings/> ) : ( <Redirect to="/login" /> ) )} />
                    <Route path="/" render={() => ( getJwt() ? ( <Landing /> ) : ( <Redirect to="/login" /> ) )} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

//todo .env front