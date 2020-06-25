import React from 'react';
import './login-page.scss';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { showListOfMovies, isLoggedOut } from '../../../redux/actions';
import {connect} from 'react-redux';

const ShowLogIn = ({handleClick}) => { // !-- Component
    return (
        <div>
            <form>
                <span>Log in order to see list of movies</span>
                <br />
                <button onClick={handleClick}>
                    Log in
                </button>
            </form>
        </div>
    )
}

class LoginPage extends Component { // !-- Container
    
    handleClick = () => {
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
        if(this.props.logout){
            return <ShowLogIn handleClick={this.handleClick}/>
        }

        if(this.props.showMovies){
            return <Redirect to="/movies"/>
        }

        if(this.props.login){
             return (
                <div>
                    <span>Congratilation! Now you can see the list of movies!!!</span>
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
       
        return <ShowLogIn handleClick={this.handleClick}/>
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