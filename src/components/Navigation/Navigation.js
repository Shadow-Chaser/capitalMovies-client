import { Button, Link } from '@chakra-ui/react';
import React from 'react';
import './Navigation.css'

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">CapitalMovies</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <Button colorScheme="teal" variant="solid"> Log In </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;