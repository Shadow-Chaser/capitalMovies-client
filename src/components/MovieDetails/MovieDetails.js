import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import './MovieDetails.css'
const baseURL = "https://image.tmdb.org/t/p/w500"

const MovieDetails = () => {
    const [details, setDetails] = useState();
    const { backdrop_path, title } = details || {};
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=81e0b3d9d2419efbd8f55d937ddca8e0&language=en-US`)
            .then(response => setDetails(response.data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <img src={baseURL + backdrop_path} alt="" className='' style={{ width: '100%', margin: "0 auto", height: "600px" }} />
            <h1>{title}</h1>
        </div>
    );
};

export default MovieDetails;