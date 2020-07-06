import React from 'react';
import './login-page.scss';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { showListOfMovies, isLoggedOut, userAuth } from '../../../redux/actions';
import {connect} from 'react-redux';
import {serviceAuth} from '../../../serviceAuth';

const ShowLogIn = ({handleLoginForm, handleSubmit}) => { // !-- Component
    return (
        <div>
            <form name='form' onSubmit={handleSubmit}>
                <span>Log in order to see the list of movies</span>
                <br />
                <label>Name </label>
                <input type="text" name='userName' onChange={handleLoginForm} />
                <label>Password </label>
                <input type="password" name='userPassword' onChange={handleLoginForm} />
                <button type="submit"> Log In </button>
            </form>
        </div>
    )
}

class LoginPage extends Component { // !-- Container
    
    handleLoginForm = (e) => {
        this.props.userAuth(e.target.name, e.target.value) 
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const{userName, userPassword} = this.props;
        const userData = {};
        userData.login = userName
        userData.password = userPassword

        serviceAuth(userName, userPassword) 
        .then(() => {
            console.log('Current user:', userData);
            return this.onLogIn();
        })
        .catch(() => {
            console.log('Password or login is wrong!');
            return null;
        })
    }

    onLogIn = () => {
        setTimeout(() => {
            this.props.onLogin();
        }, 1000); 
    }

    onLogOut = () => {
        this.props.isLoggedOut();
    }

    onRedirect = () => {
        this.props.showListOfMovies();
    }

    render(){
        const{logout, login, showMovies} = this.props
        if(logout){
            return <ShowLogIn handleLoginForm={this.handleLoginForm} handleSubmit={this.handleSubmit} />
        }

        if(showMovies){
            return <Redirect to="/movies"/>
        }

        if(login){
             return (
                <div>
                    <span>Congratilation {this.props.userName}! Now you can see the list of movies!!!</span>
                        <br />
                    <button onClick={this.onLogOut}>
                        Log out
                    </button>
                    <button onClick={this.onRedirect}>
                        See movies
                    </button>
                </div>
             )
        }
       
        return <ShowLogIn handleLoginForm={this.handleLoginForm} handleSubmit={this.handleSubmit}/>
    }
}

const mapStateToProps = (state) => {
    return {
        showMovies: state.showMovies.showMovies,
        logout: state.logout.logout,
        userName: state.userName.userName,
        userPassword: state.userPassword.userPassword
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showListOfMovies: () => dispatch(showListOfMovies()),
        isLoggedOut: () => dispatch(isLoggedOut()),
        userAuth: (name, value) => dispatch(userAuth(name, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)