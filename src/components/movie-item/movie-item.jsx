import React from 'react';
import './movie-item.scss';

const MovieItem = ({title, year}) => {
    return(
        <div>
            <span>Title movie: {title} - {year} year!</span>
        </div>
    )
}

export default MovieItem;