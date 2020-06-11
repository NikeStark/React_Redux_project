import React, { Component, Fragment } from 'react';
import './movie-list-item.scss';
import {dispatchMovies, sortMovies} from '../../redux/actions';
import MovieItem from '../movie-item';
import {connect} from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const ListOfMovies = ({ movies, sortMovies }) => { // !-- Component
   const listOfMovies = movies.map((movie) => {
        return(
            <li key={movie.id}>
                <MovieItem title={movie.title} year={movie.year}/>
            </li>
        )
    })
    return (
        <Fragment>
            <label>Search: </label>
            <input />
            <ul>
                {listOfMovies}
            </ul>
            <label>Sorted by: </label>
            <select>
            <optgroup label="Sorted by">
                <option value="none" > --- </option>
                <option onClick={() => sortMovies(movies.sort((a,b) => a.title > b.title))}>Alphabet</option>
                <option onClick={() => sortMovies(movies.sort((a,b) => a.year - b.year))}>Old movies</option>
                <option onClick={() => sortMovies(movies.sort((a,b) => b.year - a.year))}>New movies</option>
            </optgroup>
            </select>
        </Fragment>
    )
}

class MovieListItem extends Component { // !-- Container

    componentDidMount(){
        this.props.fetchMovies();
    }

    render(){
        const{movies, loading, error} = this.props;

        if(loading){
            return <Spinner />
        }

        if(error){
            return <ErrorIndicator />
        }

        if(!loading || error){
            return <ListOfMovies movies={movies} sortMovies={this.props.sortMovies}/>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
        loading: state.loading.loading,
        error: state.error.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatchMovies(dispatch),
        sortMovies: () => dispatch(sortMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);