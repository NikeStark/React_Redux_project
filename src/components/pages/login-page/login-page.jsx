import React from 'react';
import './login-page.scss';
import {Bounce} from '../../../animation';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { showListOfMovies, isLoggedOut, userAuth, alertNotice, onLoadingButton } from '../../../redux/actions';
import {connect} from 'react-redux';
import {serviceAuth} from '../../../serviceAuth';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

const ShowLogIn = ({ onKeyUp, refUserName, refUserPassword, refButtonSubmit,
                     buttonLoading, handleLoginForm, 
                     handleSubmit, alert, onObservePassword, 
                     observePassword, buttonObservePass }) => { // !-- Component
    return (
        <div>
            <form name='form'>
                <span>Log in order to see the list of movies</span>
                <div>
                    { alert &&
                    <span>Login or password are incorrect.. Please, check it out</span> }
                    <br />
                    <label>Name </label>
                    <input className={alert ? 'has-error' : ''} 
                        onKeyUp={onKeyUp}
                        ref={refUserName}
                        type="text" 
                        autoFocus
                        autoComplete="off"
                        name='userName'
                        onChange={handleLoginForm} 
                    />
                </div>
                <div>
                    <label>Password </label>
                    <input className={alert ? 'has-error' : ''}
                        onKeyUp={onKeyUp}
                        ref={refUserPassword}
                        type={observePassword ? "text" : "password"}
                        name='userPassword' 
                        onChange={handleLoginForm} 
                    />
                    <span className="show-hide-button-eye" onClick={onObservePassword}>
                        {!buttonObservePass && <i className="fa fa-eye" aria-hidden="true"></i>}
                        {buttonObservePass && <i className="fa fa-eye-slash" aria-hidden="true"></i>}
                    </span>
                </div>
                <Bounce>
                    <button type='button' onClick={handleSubmit} 
                            onKeyUp={onKeyUp}
                            ref={refButtonSubmit} 
                    >
                        {buttonLoading && <span>loading...</span>}
                        {buttonLoading && <i className="fa fa-cog fa-spin fa-fw"></i>}
                        {!buttonLoading && <span>Log In</span>}  
                    </button>
                </Bounce>
            </form>
        </div>
    )
}

class LoginPage extends Component { // !-- Container
    state = {
        observePassword: false,
        buttonObservePass: false
    }
   

    onObservePassword = () => {
        this.setState({
            observePassword: !this.state.observePassword,
            buttonObservePass: !this.state.buttonObservePass
        })
    }

    onButtonLoading = () => { 
        this.props.onLoadingButton();
    }

    handleLoginForm = (e) => {
        this.props.userAuth(e.target.name, e.target.value); 
    }
 
    componentDidMount(){
        if(this.inputName){
            return this.inputName.focus();
        }
    }

    onKeyUp = (e) => {
        if(e.keyCode === 13){
            switch (e.target.name){
                case 'userName':
                    this.inputPassword.focus();
                    break;
                case 'userPassword':
                    this.buttonSubmit.focus();
                    break;
                default:
                    this.inputName.focus();
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
     
        const{userName, userPassword} = this.props;
        const userData = {};
        userData.login = userName;
        userData.password = userPassword;

        serviceAuth(userName, userPassword)
        .then(() => {
            this.onButtonLoading(e);
            const token = jwt.sign({login: `${userName}`, password: `${userPassword}`}, 'secret');
            //localStorage.setItem('userData', token)
            Cookies.set('userData', token,
                        { expires: 30, secure: true});
            console.log('Current user:', userData);
            return this.onLogIn();
        })
        .catch(() => {
            console.log('Password or login is wrong!');
            return this.props.alertNotice(alert);
        })
    }

    onLogIn = () => {
        setTimeout(() => {
            this.props.onLogin();
        }, 2000); 
    }

    onLogOut = () => {
        this.props.isLoggedOut();
    }

    onRedirect = () => {
        this.props.showListOfMovies();
    }
    
    render(){
        const{logout, login, userName, showMovies, alert, buttonLoading} = this.props
        if(logout){
            return <ShowLogIn 
                refUserName={el => (this.inputName = el)}
                refUserPassword={el => (this.inputPassword = el)}
                refButtonSubmit={el => (this.buttonSubmit = el)}
                onKeyUp={this.onKeyUp}
                buttonObservePass={this.state.buttonObservePass}
                observePassword={this.state.observePassword}
                onObservePassword={this.onObservePassword} 
                userName={userName}
                buttonLoading={buttonLoading} 
                alert={alert} 
                handleLoginForm={this.handleLoginForm} 
                handleSubmit={this.handleSubmit} 
            />
        }

        if(showMovies){
            return <Redirect to="/movies"/>
        }
        
        if(login){
             return (
                <div>
                    <span>Congratilation {userName}! Now you can see the list of movies!!!</span>
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

        return <ShowLogIn
            refUserName={el => (this.inputName = el)}
            refUserPassword={el => (this.inputPassword = el)}
            refButtonSubmit={el => (this.buttonSubmit = el)}
            onKeyUp={this.onKeyUp}
            buttonObservePass={this.state.buttonObservePass}
            observePassword={this.state.observePassword}
            onObservePassword={this.onObservePassword}
            userName={userName} 
            buttonLoading={buttonLoading} 
            alert={alert} 
            handleLoginForm={this.handleLoginForm} 
            handleSubmit={this.handleSubmit}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        showMovies: state.showMovies.showMovies,
        logout: state.logout.logout,
        userName: state.userName.userName,
        userPassword: state.userPassword.userPassword,
        alert: state.alert.alert,
        buttonLoading: state.buttonLoading.buttonLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showListOfMovies: () => dispatch(showListOfMovies()),
        isLoggedOut: () => dispatch(isLoggedOut()),
        userAuth: (name, value) => dispatch(userAuth(name, value)),
        alertNotice: (alert) => dispatch(alertNotice(alert)),
        onLoadingButton: () => dispatch(onLoadingButton())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)