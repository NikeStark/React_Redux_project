import {combineReducers} from 'redux';
import moviesReducer from './reducers';

const rootReducer = combineReducers({
    movies: moviesReducer,
    loading: moviesReducer,
    buttonLoading: moviesReducer,
    error: moviesReducer,
    search: moviesReducer,
    login: moviesReducer,
    showMovies: moviesReducer,
    logout: moviesReducer,
    userName: moviesReducer,
    userPassword: moviesReducer,
    alert: moviesReducer
})

export default rootReducer;