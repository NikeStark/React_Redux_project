import React from 'react';
import './sort-items.scss';

const SortItems = ({sortMovies}) => {
    return(
        <div>
            <label>Sorted by: </label>
            <select onChange = {(e) => sortMovies(e.target.value)}>
                <optgroup label="Sorted by">
                    <option defaultValue="selected" hidden="hidden"> --- </option>
                    <option value="alphabet">Alphabet</option>
                    <option value="oldest">Oldest</option>
                    <option value="newest">Newest</option>
                </optgroup>
            </select>
        </div>
    )
}

export default SortItems;