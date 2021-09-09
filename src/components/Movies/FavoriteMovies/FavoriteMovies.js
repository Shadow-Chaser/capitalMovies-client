import axios from 'axios';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import FavMovieCard from '../../FavMovieCard/FavMovieCard';

const FavoriteMovies = () => {
    const [favMovies, setFavMovies] = useState();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    axios.get(`https://nameless-anchorage-84333.herokuapp.com/favorites?email=${loggedInUser.email}`)
        .then(res => {
            setFavMovies(res.data)
        })
        .catch(err => console.log(err))

    return (
        <>
            {

                loggedInUser.email ?

                    <div className='d-flex flex-wrap'>
                        {
                            favMovies?.map(movie => <FavMovieCard movie={movie.movieDetail}  ></FavMovieCard>)
                        }
                    </div>


                    :
                    <h1>Please Login to watch Favorites</h1>
            }
        </>
    );
};

export default FavoriteMovies;