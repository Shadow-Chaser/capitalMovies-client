import { Button } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navigation.css'

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // console.log(loggedInUser);
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <Link className="navbar-brand" id='brand' to="/">CapitalMovies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link className="nav-link active nav_item" aria-current="page" to='/home'>
                            <span className='nav_item__text'>Home</span>
                        </Link>
                        {
                            loggedInUser.name ?
                                <Button className='nav_item' colorScheme="teal" variant="solid"> {loggedInUser.name && loggedInUser.name} </Button>
                                :
                                <Link to='/login'>
                                    <Button className='nav_item' colorScheme="teal" variant="solid"> Log In </Button>
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;