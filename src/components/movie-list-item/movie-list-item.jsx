import React, { Component } from 'react';
import './movie-list-item.scss';
import {dispatchMovies} from '../../redux/actions';
import MovieItem from '../movie-item';
import {connect} from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const ListOfMovies = ({movies}) => { // !-- Component
   const listOfMovies = movies.map((movie) => {
        return(
            <li key={movie.id}>
                <MovieItem title={movie.title}/>
            </li>
        )
    })
    return (
        <ul>
            {listOfMovies}
        </ul>
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
            return <ListOfMovies movies={movies}/>
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
        fetchMovies: () => dispatchMovies(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);