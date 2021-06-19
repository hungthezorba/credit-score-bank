import React, { useState, useContext } from "react";
import {
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Box,
  Stack
} from "@chakra-ui/react";
import AppContext from '../store/AppContext'
import { Redirect, useHistory } from "react-router-dom";

import { useMutation, gql } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage, FormikErrors, FormikProps, useFormik } from 'formik';
import Login from "../pages/Login";



const LOGIN = gql`
mutation Login($username: String!, $password: String!) {
	login(options: {username: $username, password: $password}) {
    user {
      id
      username
    }
  }
}
`;

interface loginInput {
  username: string,
  password: string
}

interface loginData {
  id: number,
  username: string
}

const SAVE_ROCKET = gql`
  mutation saveRocket($rocket: RocketInput!) {
    saveRocket(rocket: $rocket) {
      model
    }
  }
`;

interface RocketInventory {
  id: number;
  model: string;
  year: number;
  stock: number;
}

interface NewRocketDetails {
  model: string;
  year: number;
  stock: number;
}

type event = {
  value: React.ChangeEvent<HTMLInputElement>
}


const validate = (values: loginInput) => {


  const errors: loginInput = { username: '', password: '' };


  if (!values.username) {
    errors.username = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

const LoginForm = () => {

  const globalState = useContext(AppContext)

  const initialValues: loginInput = { username: '', password: '' }

  function validateUsername(value: string) {
    let error
    if (!value) {
      error = "Username is required"
    }
    return error
  }

  function validatePassword(value: string) {
    let error
    if (!value) {
      error = "Password is required"
    }
    return error
  }

  const history = useHistory();

  // apollo hook mutation
  const [login] = useMutation(LOGIN);

  return (
    <Box minW={['100%', '35%']} w={['100%', '35%']} px={12} py={28} borderRadius={20} boxShadow="base">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          login({ variables: values })
            .then((res) => {
              globalState.setAuthenticated(true);
              history.push("/")
            })

            .catch((err) => {
              actions.setStatus(err.message)
            })
        }}
      >
        {({ status, isSubmitting, errors }) => (
          <Form>
            <Field name="username" validate={validateUsername}>
              {({ field, form }: { field: string, form: any }) => (
                <FormControl isInvalid={form.errors.username && form.touched.username}>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input {...field} id="username" />
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password" validate={validatePassword}>
              {({ field, form }: { field: string, form: any }) => (
                <FormControl mt={10} isInvalid={form.errors.password && form.touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input type="password" {...field} id="password" />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            {status}
            <Button
              mt={10}
              w={['100%', '100%']}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Login
          </Button>
          </Form>
        )}
      </Formik>

    </Box>


  );
};

export default LoginForm