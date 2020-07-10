import {createStore, compose} from 'redux';
import rootReducer from './rootReducer';
import { loadState, saveState } from '../localStorage';
import throttle from 'lodash.throttle';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, compose(
    //middleware/thunk/saga
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
))
                       
store.subscribe(throttle(() => {
    saveState({
        login: store.getState().login,
        userName: store.getState().userName
    })
}, 1000));

export default store;