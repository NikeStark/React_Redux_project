import React from 'react';
import './search-item.scss';

const SearchItem = ({searchMovies}) => {
    return(
        <div>
            <label>Search: </label>
            <input 
                type="text" 
                placeholder="Search movie..."
                onChange={(e) => searchMovies(e.target.value)}
            />
        </div>
    )
}

export default SearchItem;