import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MoviePage from '../pages/movie-page';
import HomePage from '../pages/home-page';
import Navbar from '../navbar';

import './app.scss';

const App = () => {
    return (
        <div>
            <span className="test-style">Movies</span>
            <Navbar />
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/movies' component={MoviePage} />
            </Switch>
        </div>
    )
}

export default App;