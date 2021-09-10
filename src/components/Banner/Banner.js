import React, { useContext, useEffect, useState } from 'react';
import './Banner.css'
import { MovieContext } from '../../App'
import { Button, Heading } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/tooltip';
import { Badge, Link } from '@chakra-ui/layout';
import axios from 'axios';
const baseURL = "https://image.tmdb.org/t/p/original"


const Banner = () => {
    const [movies, setMovies] = useContext(MovieContext)

    const { backdrop_path, title, vote_average, release_date, overview } = movies?.popular[0] || {};


    return (
        <div className='banner_div'>
            <img src={baseURL + backdrop_path} style={{ width: '100%' }} alt="" srcset="" />
            <div class="bottom_left">
                <h1 className='banner_title'>{title}
                    <Tooltip hasArrow label="User Score" bg="teal" color="white" placement="top">
                        <Badge variant="outline" colorScheme="green" style={{ margin: '0px 0px 10px 10px' }}> {vote_average * 10}% </Badge>
                    </Tooltip>
                </h1>
                <Tooltip hasArrow label="Release Date" bg="teal" color="white" placement="top">
                    <Badge className='release_date' variant="solid" colorScheme="teal" > {release_date} </Badge>
                </Tooltip>
                <p className='overview'>{overview}</p>

            </div>

        </div>
    );
};

export default Banner;