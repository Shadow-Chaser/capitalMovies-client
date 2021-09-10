import { Button, Heading, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navigation.css'

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // console.log(loggedInUser);
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to='/'>
                    <Text textShadow="1px 1px #ff0000" fontWeight="bold" fontSize="26px" m="">CapitalMovies</Text>
                </Link>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
                <div class=" ms-auto d-flex">
                    <Link class="nav-link single-link" to='/discover'>Discover</Link>
                    {
                        loggedInUser.email ?
                            <Button className='' colorScheme="teal" variant="solid"> {loggedInUser.name && loggedInUser.name} </Button>
                                :
                            <Link class="nav-link single-link" to='/login'>Login</Link>
                    }
                    </div>
                {/* </div> */}
            </div>
        </nav>
    );
};

export default Navigation;