import React from 'react';
import './movie-page.scss';
import MovieListItem from '../../movie-list-item';
import { Redirect } from 'react-router-dom';

const MoviePage = ({login}) => {
    if(login){
        return (
            <div>
                <MovieListItem />
            </div>
        )
    }
    return <Redirect to="/login" />
}

export default MoviePage;