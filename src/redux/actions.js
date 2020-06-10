import { FETCH_MOVIES, REQUEST_MOVIES, ERROR_MOVIES } from "./types";
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
    dispatchMovies
}