import { Badge } from '@chakra-ui/layout';
import { Tooltip } from "@chakra-ui/react"
import React from 'react';
import { useHistory } from 'react-router';
import './MovieCard.css'
const baseURL = "https://image.tmdb.org/t/p/w500"

const MovieCard = (props) => {
    const { id, title, poster_path, vote_average } = props.movie;
    const history = useHistory()
    const showDetails = (id) => {
        const url = `/movie/${id}`;
        history.push(url)
        console.log(id, " body clicked");
    }

    const addToFavorites = (id) => {
        console.log(id, " icon clicked");
    }

    return (

        <div className="card">
            <img src={baseURL + poster_path} alt="" className='card-img' onClick={() => { showDetails(id) }} />

            <div className="d-flex justify-content-between">
                <div>
                    <h1 className="card-title"> {title} </h1>
                    <Tooltip hasArrow label="User Scrore" bg="teal" color="white" placement="top">
                        <Badge variant="outline" colorScheme="green" style={{ margin: '0px 0px 10px 10px' }}> {vote_average * 10}% </Badge>
                    </Tooltip>
                </div>
                <Tooltip hasArrow label="Add to Favorites" bg="teal" color="white" placement="top">
                    <h1 className="heart-icon" onClick={() => { addToFavorites(id) }} >❤</h1>
                </Tooltip>
                {/* <BsHeart className='heart-icon' /> */}
            </div>
        </div>

    );
};

export default MovieCard;