import { FETCH_MOVIES, REQUEST_MOVIES, ERROR_MOVIES, SORT_MOVIES } from "./types";

const initialState = {
    movies: [],
    loading: true,
    error: null
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
                ...state.movies,
                movies: [...state.movies]
            }

        default:
            return state;
    }
}

export default moviesReducer;