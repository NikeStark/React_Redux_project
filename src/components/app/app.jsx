import React from 'react';
import { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import {Route, Switch} from 'react-router-dom';
import MoviePage from '../pages/movie-page';
import HomePage from '../pages/home-page';
import Navbar from '../navbar';
import LoginPage from '../pages/login-page';
import {connect} from 'react-redux';
import {isLoggedIn} from '../../redux/actions';

import './app.scss';

class App extends Component {
    onLogIn = () => {
        this.props.isLoggedIn();
    }
   
    render(){
        const{login} = this.props 
        return (
            <div>
                <span className="test-style">Movies</span>
                <Navbar />
                <Switch>
                    <Route path='/' component={HomePage} exact />
                    <Route path='/movies' render = {() => <MoviePage login={login}/>} />
                    <Route path='/login' render = {() => <LoginPage onLogin={this.onLogIn} login={login} />} />

                    <Route path='/' render = {() => <ErrorIndicator />} />
                </Switch>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        login: state.login.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isLoggedIn: () => dispatch(isLoggedIn())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)