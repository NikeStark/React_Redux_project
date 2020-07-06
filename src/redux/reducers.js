import { FETCH_MOVIES, REQUEST_MOVIES, ERROR_MOVIES, SORT_MOVIES, SEARCH_MOVIES, LOGIN_MOVIES, SHOW_MOVIES, LOGOUT_MOVIES, AUTH_MOVIES } from "./types";

const initialState = {
    movies: [],
    loading: true,
    error: null,
    search: '',
    login: false,
    logout: false,
    showMovies: false,
    userName: '',
    userPassword: ''
}

const moviesReducer = (state = initialState, action) => {
    switch(action.type){
        case REQUEST_MOVIES:
            return {
                ...state,
                movies: [],
                loading: true,
                error: null 
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false,
                error: null,
                showMovies: false
            }
        case ERROR_MOVIES:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case SORT_MOVIES:
            return {
                ...state,
                movies: [...state.movies.sort(action.payload)]
            }
        case SEARCH_MOVIES:
            return {
                ...state,
                search: action.payload
            }
        case LOGIN_MOVIES:
            return {
                ...state,
                login: true,
                logout: false
            }
        case SHOW_MOVIES:
            return {
                ...state,
                showMovies: true
            }
        case LOGOUT_MOVIES:
            return {
                ...state,
                login: false,
                logout: true,
                userName: ''
            }  
        case AUTH_MOVIES:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export default moviesReducer;