import React from 'react';
import './movie-item.scss';

const MovieItem = ({title}) => {
    return(
        <div>
            <span>Title movie: {title}</span>
        </div>
    )
}

export default MovieItem;