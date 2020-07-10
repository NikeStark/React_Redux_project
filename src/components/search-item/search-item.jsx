import React from 'react';
import './search-item.scss';

const SearchItem = ({searchMovies, onClearSearch}) => {
    return(
        <div>
            <form onSubmit={onClearSearch}>
            <label>Search: </label>
            <input 
                type="text" 
                placeholder="Search movie..."
                onChange={(e) => searchMovies(e.target.value)}
            />
            <button type='submit'>Clear</button>
            </form>
        </div>
    )
}

export default SearchItem;