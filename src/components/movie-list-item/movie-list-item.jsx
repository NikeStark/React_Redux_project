import React, { Component, Fragment } from 'react';
import './movie-list-item.scss';
import {dispatchMovies, sortMovies, searchMovies, fetchMovies} from '../../redux/actions';
import MovieItem from '../movie-item';
import {connect} from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import SearchItem from '../search-item';
import SortItems from '../sort-items';
import {CertainMovie} from '../certain-movie';

const ListOfMovies = ({watchMovie, isOpenMovie, onRecieveMovie, movies, sortMovies, searchMovies, search, onClearSearch}) => { // !-- Component
   const searchCase = search.toLowerCase();
   const listOfMovies = movies
        .filter((movie) => movie.title.toLowerCase().includes(searchCase))
        .map((movie) => {
                return (
                    <li key={movie.id} onClick={onRecieveMovie}>
                        <MovieItem title={movie.title} year={movie.year} />
                    </li>
                )
        })
            return (
                <Fragment>
                    <SearchItem searchMovies={searchMovies} onClearSearch={onClearSearch} />
                    <CertainMovie isOpenMovie={isOpenMovie} watchMovie={watchMovie} movies={movies}/>
                        <ul>
                            {!listOfMovies.length ? <p>Movie not found</p> : listOfMovies}
                        </ul>
                        <span>{listOfMovies.length} movies was found!</span>
                    <SortItems sortMovies={sortMovies} />
                </Fragment>
            )
}

class MovieListItem extends Component { // !-- Container
   
    state = {
        isOpenMovie: false,
        watchMovie: this.mov
    }    
    
    mov = {
        title:'',
        year:''
    }

    onRecieveMovie = () => {
        this.setState({
            isOpenMovie: true,
            watchMovie: fetchMovies(this.props.movies)
        })
    }

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
        const{isOpenMovie, watchMovie} = this.state;
        
        if(loading){
            return <Spinner />
        }

        if(error){
            return <ErrorIndicator />
        }
        
        if(!loading || error){
            return <ListOfMovies watchMovie={watchMovie} isOpenMovie={isOpenMovie} onRecieveMovie={this.onRecieveMovie} onClearSearch={this.onClearSearch} search={search} movies={movies} sortMovies={sortMovies} searchMovies={searchMovies}/>
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