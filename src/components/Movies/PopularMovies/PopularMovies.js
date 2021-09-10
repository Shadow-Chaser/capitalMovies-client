import React, { useContext } from 'react';
import { MovieContext } from '../../../App';
import MovieCard from '../../MovieCard/MovieCard';

const PopularMovies = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div className='d-flex flex-wrap justify-content-center' >
            {
                movies.popular.map(movie => <MovieCard movie={movie}  ></MovieCard>)
            }
        </div>
    );
};

export default PopularMovies;