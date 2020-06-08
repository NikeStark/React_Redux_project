import {combineReducers} from 'redux';
import moviesReducer from './reducers';

const rootReducer = combineReducers({
    movies: moviesReducer
})

export default rootReducer;