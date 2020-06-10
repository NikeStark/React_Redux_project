import {combineReducers} from 'redux';
import moviesReducer from './reducers';

const rootReducer = combineReducers({
    movies: moviesReducer,
    loading: moviesReducer,
    error: moviesReducer
})

export default rootReducer;