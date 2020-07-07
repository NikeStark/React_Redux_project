import {createStore, compose} from 'redux';
import rootReducer from './rootReducer';
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, compose(
    //middleware/thunk/saga
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
))

store.subscribe(() => {
    saveState({
        login: store.getState().login,
        userName: store.getState().userName
    })
})

export default store;