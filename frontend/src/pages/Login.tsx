import { Center, Box } from '@chakra-ui/layout'
import React from 'react'
import LoginForm from '../components/LoginForm'


const Login = () => {

    return (
        <Box>
            <Center>
                <LoginForm/>
            </Center>
        </Box>
    )
}

export default Login