import React from 'react';
import './login-page.scss';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { showListOfMovies, isLoggedOut } from '../../../redux/actions';
import {connect} from 'react-redux';
import {serviceAuth} from '../../../serviceAuth';

const ShowLogIn = ({handleLoginForm, handleSubmit}) => { // !-- Component
    return (
        <div>
            <form name='form' onSubmit={handleSubmit}>
                <span>Log in order to see the list of movies</span>
                <br />
                <label>Name </label>
                <input type="text" name='login' onChange={handleLoginForm} />
                <label>Password </label>
                <input type="password" name='password' onChange={handleLoginForm} />
                <button type="submit"> Log In </button>
            </form>
        </div>
    )
}

class LoginPage extends Component { // !-- Container
    state = {
        login: '',
        password: ''
    }

    handleLoginForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }) 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const{login, password} = this.state
        let userData = {}
        userData.userName = login
        userData.userPassword = password
       
        serviceAuth(login, password) 
        .then(() => {
            console.log('Current user:', userData)
            return this.onLogIn()
        })
        .catch(() => {
            return null
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
                    <span>Congratilation {this.state.login}! Now you can see the list of movies!!!</span>
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
    return{
        showMovies: state.showMovies.showMovies,
        logout: state.logout.logout
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showListOfMovies: () => dispatch(showListOfMovies()),
        isLoggedOut: () => dispatch(isLoggedOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)