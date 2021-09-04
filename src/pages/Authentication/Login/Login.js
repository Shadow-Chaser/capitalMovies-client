import React, { useState } from 'react';
import login from '../../../assets/login.svg'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    InputGroup,
    Input,
    InputRightElement,
    Button,
    Heading
} from "@chakra-ui/react"
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <div className='row '>
            <div className="col-md-6 shadow-sm rounded-3 border p-5 login_div">
                <Heading className='mb-3' as="h1" size="xl" isTruncated> Enter Your Credential </Heading>
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input size="lg" type="email" placeholder="Enter email address" />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>

                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size="lg">
                        <Input
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Enter password"
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <Button colorScheme="teal" size="md" className='mt-4 '> Log In </Button>
                <p>Don't have an account? Please
                    <Link to='/register'>
                        <Button colorScheme="teal" variant="outline"> Register </Button>
                    </Link>
                </p>
            </div>

            <div className="col-md-6">
                <img src={login} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Login;