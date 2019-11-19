import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

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
import Movies from './components/movies/Movies';
import Search from './components/movies/Search';

import Movie from './components/movie/movie';
import SearchMovies from './components/movie/searchMovies';

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
            <ReactNotification />
            <Router>
                <Switch>                    
                    <Route exact path="/movie/:id">
                        <Movie />
                    </Route>
                    <Route exact path="/search/:movie">
                        <SearchMovies />
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
                    <Route exact path="/movies" render={() => ( getJwt() ? ( <Movies/> ) : ( <Redirect to="/login" /> ) )} />
                    <Route exact path="/search/:research" render={() => ( getJwt() ? ( <Search/> ) : ( <Redirect to="/login" /> ) )} />


                    <Route path="/" render={() => ( getJwt() ? ( <Profile/> ) : ( <Redirect to="/login"/> ) )} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
