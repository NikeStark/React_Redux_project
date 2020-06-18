import { FETCH_MOVIES, REQUEST_MOVIES, ERROR_MOVIES, SORT_MOVIES, SEARCH_MOVIES } from "./types";

const initialState = {
    movies: [],
    loading: true,
    error: null,
    search: ''
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
                error: null
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

        default:
            return state;
    }
}

export default moviesReducer;