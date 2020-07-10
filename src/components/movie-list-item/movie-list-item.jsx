import React, { Component, Fragment } from 'react';
import './movie-list-item.scss';
import {dispatchMovies, sortMovies, searchMovies} from '../../redux/actions';
import MovieItem from '../movie-item';
import {connect} from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import SearchItem from '../search-item';
import SortItems from '../sort-items';

const ListOfMovies = ({ movies, sortMovies, searchMovies, search, onClearSearch}) => { // !-- Component
   const searchCase = search.toLowerCase();
   const listOfMovies = movies
        .filter((movie) => movie.title.toLowerCase().includes(searchCase))
        .map((movie) => {
                return (
                    <li key={movie.id}>
                        <MovieItem title={movie.title} year={movie.year}/>
                    </li>
                )
        })
            return (
                <Fragment>
                    <SearchItem searchMovies={searchMovies} onClearSearch={onClearSearch}/>
                        <ul>
                            {!listOfMovies.length ? <p>Movie not found</p> : listOfMovies}
                        </ul>
                    <SortItems sortMovies={sortMovies} />
                </Fragment>
            )
}

class MovieListItem extends Component { // !-- Container

    componentDidMount(){
        this.props.fetchMovies();
    }

    onClearSearch = (e) => {
        this.props.searchMovies('');
        e.preventDefault();
        e.target.reset();
    }

    render(){
        const{movies, loading, error, sortMovies, searchMovies, search} = this.props;
        
        if(loading){
            return <Spinner />
        }

        if(error){
            return <ErrorIndicator />
        }
        
        if(!loading || error){
            return <ListOfMovies onClearSearch={this.onClearSearch} search={search} movies={movies} sortMovies={sortMovies} searchMovies={searchMovies}/>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
        loading: state.loading.loading,
        error: state.error.error,
        search: state.search.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatchMovies(dispatch),
        sortMovies: (sortingMovies) => dispatch(sortMovies(sortingMovies)),
        searchMovies: (searchMovie) => dispatch(searchMovies(searchMovie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);