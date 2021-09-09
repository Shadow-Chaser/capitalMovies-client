import { Badge } from '@chakra-ui/layout';
import { Tooltip, useToast } from "@chakra-ui/react"
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext, MovieContext } from '../../App';
import axios from 'axios';
import './MovieCard.css'
const baseURL = "https://image.tmdb.org/t/p/w500"

const MovieCard = (props) => {
    const toast = useToast()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [movies, setMovies] = useContext(MovieContext);
    const { id, title, poster_path, vote_average } = props.movie;
    const history = useHistory()
    const showDetails = (id) => {
        const url = `/movie/${id}`;
        history.push(url)
        // console.log(id, " body clicked");
    }

    const addToFavorites = (id) => {
        // console.log(id, " icon clicked", "category: ", props.category);
        // console.log(props.movie)

        if (loggedInUser.email) {
            axios.post('https://nameless-anchorage-84333.herokuapp.com/addToFavorites', {
                email: loggedInUser.email,
                movieDetail: props.movie
            })
                .then(res => {
                    console.log(res.data)
                    if (res.data) {
                        toast({
                            title: "Added to Favorites",
                            status: "success",
                            position: "top",
                            isClosable: true,
                        })
                    }
                    else {
                        toast({
                            title: "Already added to Favorites!",
                            status: "warning",
                            position: "top",
                            isClosable: true,
                        })
                    }
                })
                .then(err => {
                    console.log(err)
                })
        }
        else {
            toast({
                title: "Please Login to add to Favorites!",
                status: "error",
                position: "top",
                isClosable: true,
            })
        }
    }

    return (

        <div className="card">
            <img src={baseURL + poster_path} alt="" className='card-img' onClick={() => { showDetails(id) }} />

            <div className="d-flex justify-content-between">
                <div>
                    <h1 className="card-title"> {title} </h1>
                    <Tooltip hasArrow label="User Score" bg="teal" color="white" placement="top">
                        <Badge variant="outline" colorScheme="green" style={{ margin: '0px 0px 10px 10px' }}> {vote_average * 10}% </Badge>
                    </Tooltip>
                </div>
                <Tooltip hasArrow label="Add to Favorites" bg="teal" color="white" placement="top">
                    {/* <h1 className="heart-icon" onClick={() => { addToFavorites(id) }} >❤</h1> */}
                    <i class="bi bi-bookmark-heart-fill heart-icon" onClick={() => { addToFavorites(id) }} />
                </Tooltip>
            </div>
        </div>

    );
};

export default MovieCard;