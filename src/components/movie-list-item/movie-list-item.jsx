import React, { Component } from 'react';
import './movie-list-item.scss';
import {dataMovies} from '../../data-movies';
import {fetchMovies} from '../../redux/actions';
import MovieItem from '../movie-item';
import {connect} from 'react-redux';

class MovieListItem extends Component{

    componentDidMount(){
        const{fetchMovies} = this.props;
        const movies = () => fetchMovies(dataMovies);
        setTimeout(() => movies(), 2000)
    }

    render(){
        const{movies} = this.props;
        const listOfMovies = movies.map((movie) => {
            return(
                <li key={movie.id}>
                    <MovieItem title={movie.title}/>
                </li>
            )
        })
        return(
            <ul>
                {listOfMovies}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: (newMovie) => dispatch(fetchMovies(newMovie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);