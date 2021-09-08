import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import './MovieDetails.css'
import { Tooltip } from '@chakra-ui/tooltip';
import { Badge, Link } from '@chakra-ui/layout';
import Navigation from '../Navigation/Navigation';
const baseURL = "https://image.tmdb.org/t/p/w500"


const MovieDetails = () => {
    const [details, setDetails] = useState({});
    const { backdrop_path, title, homepage, genres, release_date, tagline, overview, original_language, original_title, status, revenue, budget, production_companies } = details || {};
    const { id } = useParams();
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=81e0b3d9d2419efbd8f55d937ddca8e0&language=en-US`

    useEffect(() => {
        axios.get(url)
            .then(response => setDetails(response.data))
            .catch(error => console.log(error))
    }, [])

    console.log("Data ", details);
    return (
        <div>
            <Navigation />
            <img src={baseURL + backdrop_path} alt="" className='movieImage' />
            <div className="d-flex">
                <h1 className='movieTitle ms-4 mt-4'>{title}</h1>
                <Tooltip hasArrow label="Go to Homepage" bg="teal" color="white" placement="top">
                    <Link className="movieTitle ms-2 mt-4" target="_blank" href={homepage} >❤</Link>
                </Tooltip>
                <p>Goto IMDB</p>
            </div>
            <div className="ms-4 mb-4">
                {
                    genres?.map(g => <Badge className='ms-1' variant="solid" colorScheme="green"> {g.name} </Badge>)
                }
            </div>

            <div className="ms-4 row">
                <div className="col-md-9">
                    <p>{tagline}</p>
                    <p>Release Date : {release_date} </p>
                    <p>Original Language: {original_language}</p>
                    <p>Original Title: {original_title}</p>
                    <p>Overview</p>
                    <p>{overview}</p>
                </div>

                <div className="col-md-3">
                    <p>Status: {status}</p>
                    <p>Budget: ${budget}</p>
                    <p>Revenue: ${revenue}</p>
                    <p>Production Companies</p>

                    <div className="d-flex flex-wrap">
                        {
                            production_companies?.map(pc =>
                                <Tooltip hasArrow label={pc.name + ', ' + pc.origin_country} bg="teal" color="white" placement="top">
                                    <img src={baseURL + pc.logo_path} alt="" style={{ width: '70px', margin: '15px' }} />
                                </Tooltip>
                            )
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default MovieDetails;