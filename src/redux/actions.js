import { FETCH_MOVIES } from "./types";

const fetchMovies = (newMovie) => {
    return {
        type: FETCH_MOVIES,
        payload: newMovie
    }
}

export {
    fetchMovies
}