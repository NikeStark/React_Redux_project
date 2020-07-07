import { FETCH_MOVIES, REQUEST_MOVIES, ERROR_MOVIES, SORT_MOVIES, SEARCH_MOVIES, LOGIN_MOVIES, SHOW_MOVIES, LOGOUT_MOVIES, AUTH_MOVIES, ALERT_NOTICE, BUTTON_LOADING } from "./types";
import {getMovies} from '../data-movies';

const requestMovies = () => {
    return {
        type: REQUEST_MOVIES
    }
}

const fetchMovies = (newMovie) => {
    return {
        type: FETCH_MOVIES,
        payload: newMovie
    }
}

const errorMovies = (error) => {
    return {
        type: ERROR_MOVIES,
        payload: error
    }
}

const sortOfMovies = (sortingMovies) => {
    return sortingMovies === 'alphabet' ? (a,b) => a.title > b.title ? 1 : -1 :
           sortingMovies === 'oldest' ? (a,b) => a.year - b.year : 
           sortingMovies === 'newest' ? (a,b) => b.year - a.year : 0 
}
const sortMovies = (sortingMovies) => {
    return {
        type: SORT_MOVIES,
        payload: sortOfMovies(sortingMovies)
    }
}

const searchMovies = (searchMovie) => {
    return {
        type: SEARCH_MOVIES,
        payload: searchMovie 
    }
}

const isLoggedIn = () => {
    return {
        type: LOGIN_MOVIES
    }
}

const userAuth = (name, value) => {
    return {
        type: AUTH_MOVIES,
        payload: { [name]: value }
    }
}

const showListOfMovies = () => {
    return {
        type: SHOW_MOVIES
    }
}

const isLoggedOut = () => {
    return {
        type: LOGOUT_MOVIES
    }
}

const alertNotice = (alert) => {
    return {
        type: ALERT_NOTICE,
        payload: alert
    }
}

const onLoadingButton = () => {
    return {
        type: BUTTON_LOADING
    }
}

const dispatchMovies = (dispatch) => {
        dispatch(requestMovies())
            getMovies() 
            .then((dataMovies) => {
                dispatch(fetchMovies(dataMovies));
            })
            .catch((err) => {
                dispatch(errorMovies(err));
            })
}

export {
    requestMovies,
    fetchMovies,
    errorMovies,
    dispatchMovies,
    sortMovies,
    searchMovies,
    isLoggedIn,
    showListOfMovies,
    isLoggedOut,
    userAuth,
    alertNotice,
    onLoadingButton
}