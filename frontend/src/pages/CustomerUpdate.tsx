import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Flex,
  Image,
  Center
} from "@chakra-ui/react";
import {
  Formik,
  Form,
  Field
} from "formik";
import customer from "../assets/img/customer.jpg";

interface ResultPageProps {}

interface ResultPageState {}

interface MyFormValues {
  firstName: string,
  lastName: string,
  dob: string
}

export default class CustomerUpdate extends React.Component<ResultPageProps, ResultPageState> {
  constructor(props: any) {
    super(props);

    this.state = {

    };
  }

  validate = (values: MyFormValues) => {
    const errors: MyFormValues = { firstName: '', lastName: '', dob: '' };
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
      if (!values.dob) {
      errors.dob = 'Required';
    }
    return errors;
};

  validateFirstName(value: any) {
    let error;
    if (!value) {
      error = "First Name is required";
    }
    return error;
  }

  validateLastName(value: any) {
    let error;
    if (!value) {
      error = "Last Name is required";
    }
    return error;
  }

  validateDOB(value: any) {
    let error;
    if (!value) {
      error = "Date of Birth is required";
    }
    return error;
  }

  render() {
    return (
      <div style={{ paddingTop: 100 }}>
        <div className="container">
          <p className="header">NEW CUSTOMER INPUT</p>
          <Flex style={{marginTop: 50}}>
            <Formik
              initialValues={{ firstName: '', lastName: '', dob: '' }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(props) => (
                <Form style={{marginLeft: 50  }}>

                  {/* First Name */}
                  <Field name="firstName" validate={this.validateFirstName}>
                    {({ field, form }: { field: string, form: any }) => (
                      <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                        <FormLabel htmlFor="first-name">First name</FormLabel>
                        <Input {...field} id="first-name" placeholder="First Name" width="400px"/>
                        <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  {/* Last Name */}
                  <Field name="lastName" validate={this.validateLastName}>
                    {
                    ({ field, form }: { field: string, form: any }) => (
                      <FormControl
                        isInvalid={form.errors.lastName && form.touched.lastName}
                      >
                        <FormLabel htmlFor="lastName">Last name</FormLabel>
                        <Input {...field} id="lastName" placeholder="Last Name" width="400px"/>
                        <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                      </FormControl>
                    )
                    }
                  </Field>

                  {/* DOB */}
                  <Field name="dob" validate={this.validateDOB}>
                    {
                    ({ field, form }: { field: string, form: any }) => (
                      <FormControl
                        isInvalid={form.errors.dob && form.touched.dob}
                      >
                        <FormLabel htmlFor="dob">Date of Birth</FormLabel>
                        <Input {...field} id="dob" placeholder="dd-MM-yyyy" width="400px"/>
                        <FormErrorMessage>{form.errors.dob}</FormErrorMessage>
                      </FormControl>
                    )
                    }
                  </Field>
                  <Center>
                    <Button
                      mt={4}
                      textColor="white"
                      bg="#37517e"
                      height="48px"
                      width="100px"
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Center>
                </Form>
              )}
            </Formik>
            <div style={{marginLeft: 150}}>
                <Image height="270px" width="400px" src={customer} alt="Dan Abramov" />
            </div>
          </Flex>

          {/* Final padding page */}
          <div style={{ padding: 50 }}></div>
        </div>
      </div>
    );
  }
}