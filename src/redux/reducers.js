import { FETCH_MOVIES } from "./types";

const initialState = {
    movies: []
}

const moviesReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_MOVIES:
            return {
                ...state.movies,
                movies: action.payload
            }
        default:
            return state;
    }
}

export default moviesReducer;