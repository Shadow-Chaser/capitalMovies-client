import React, { useContext, useEffect, useState } from 'react';
import './Banner.css'
import { MovieContext } from '../../App'
import { Button, Heading } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/tooltip';
import { Badge, Link } from '@chakra-ui/layout';
import axios from 'axios';
const baseURL = "https://image.tmdb.org/t/p/w500"


const Banner = () => {
    const [movies, setMovies] = useContext(MovieContext)

    const { backdrop_path, title, vote_average, release_date, overview } = movies?.popular[0] || {};


    return (
        <div className='banner_div'>
            <img src={baseURL + backdrop_path} style={{ width: '100%' }} alt="" srcset="" />
            <div class="bottom_left">
                <Heading as="h2" size="4xl" isTruncated>{title}
                    <Tooltip hasArrow label="User Score" bg="teal" color="white" placement="top">
                        <Badge variant="outline" colorScheme="green" style={{ margin: '0px 0px 10px 10px' }}> {vote_average * 10}% </Badge>
                    </Tooltip>
                </Heading>
                <Badge variant="solid" colorScheme="teal" style={{ margin: '20px 0 20px 0', padding: '5px 10px' }}> {release_date} </Badge>
                <p style={{ color: 'white', fontWeight: '800' }}>{overview}</p>

            </div>

        </div>
    );
};

export default Banner;