import { Center, Box } from '@chakra-ui/layout'
import React, { useContext } from 'react'
import { Redirect, useHistory } from 'react-router'
import LoginForm from '../components/LoginForm'
import AppContext from '../store/AppContext'

function Login() {

    const globalState = useContext(AppContext)

    if (globalState.authenticated) {
        return (
            <Redirect to={"/home"} exact />
        )
    }

    return (
        <Box>
            <Center>
                <LoginForm />
            </Center>
        </Box>
    )
}

export default Login