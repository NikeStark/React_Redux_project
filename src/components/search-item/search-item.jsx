import React from 'react';
import './search-item.scss';

const SearchItem = ({searchMovies, onClearSearch}) => {
    return(
        <div className="search-box">
            <div className="wr">
            <form className="form-search-box" onSubmit={onClearSearch}>
                <img src="https://images.vexels.com/media/users/3/147104/isolated/preview/f6fa8014ab7b09a98c62064c76600008-instagram-search-button-by-vexels.png"
                    className="img-search"
                    alt="img-search"
                >
                </img>
                <input 
                    className="input-search-box"
                    type="text" 
                    placeholder="Search movie..."
                    onChange={(e) => searchMovies(e.target.value)}
                />
                <button 
                    className="button-search-box" 
                    type='submit'>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
            </form>
            </div>
        </div>
    )
}

export default SearchItem;