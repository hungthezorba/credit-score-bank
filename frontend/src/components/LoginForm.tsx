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

import { Formik, Form, Field, ErrorMessage, FormikErrors, FormikProps, useFormik } from 'formik';


type event = {
  value: React.ChangeEvent<HTMLInputElement>
}

interface MyFormValues {
  username: string,
  password: string,
}

const validate = (values: MyFormValues) => {
  const errors: MyFormValues = { username: '', password: '' };
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

  const initialValues: MyFormValues = { username: '', password: '' }

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

  return (
    <Box minW={['100%', '35%']} w={['100%', '35%']} px={12} py={40} borderRadius={20} boxShadow="base">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            globalState.setAuthenticated(!globalState.authenticated)
            actions.setSubmitting(false)
            history.push('/home')
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
            <Field name="username" validate={validateUsername}>
              {({ field, form }: { field: string, form: any }) => (
                <FormControl isInvalid={form.errors.username && form.touched.username}>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input {...field} id="username" placeholder="name" />
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password" validate={validatePassword}>
              {({ field, form }: { field: string, form: any }) => (
                <FormControl isInvalid={form.errors.password && form.touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input {...field} id="password" placeholder="password" />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              w={['100%', '100%']}
              colorScheme="teal"
              isLoading={props.isSubmitting}
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