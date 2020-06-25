import {combineReducers} from 'redux';
import moviesReducer from './reducers';

const rootReducer = combineReducers({
    movies: moviesReducer,
    loading: moviesReducer,
    error: moviesReducer,
    search: moviesReducer,
    login: moviesReducer,
    showMovies: moviesReducer,
    logout: moviesReducer
})

export default rootReducer;