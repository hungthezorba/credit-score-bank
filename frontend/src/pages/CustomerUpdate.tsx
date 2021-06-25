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

  validateFirstName(value: any) {
    let error;
    if(!value) {
      error = "First Name is required";
    } else if(!(/^([a-zA-Z ]){2,30}$/.test(value))) {
      error = "Wrong Format. Input again!"
    }
    return error;
  }

  validateLastName(value: any) {
    let error;
    if(!value) {
      error = "Last Name is required";
    } else if(!(/^([a-zA-Z ]){2,30}$/.test(value))) {
      error = "Wrong Format. Input again!"
    }
    return error;
  }

  validateDOB(value: any) {
    let error;
    if (!value) {
      error = "Date of Birth is required";
    } else if(!(/^(0[1-9]|[12][0-9]|3[01])[- .](0[1-9]|1[012])[- .](19|20)\d\d$/.test(value))) {
      error = "Wrong Format. Input again!"
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

                  // POST THE CUSTOMER DATA HERE -> take values and use POST method
                  console.log(values);

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
                        <Input {...field} id="first-name" placeholder="E.g. Duy" width="400px"/>
                        <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  {/* Last Name */}
                  <Field name="lastName" validate={this.validateLastName}>
                    {
                    ({ field, form }: { field: string, form: any }) => (
                      <FormControl isInvalid={form.errors.lastName && form.touched.lastName} style={{marginTop: 20}}>
                        <FormLabel htmlFor="lastName">Last name</FormLabel>
                        <Input {...field} id="lastName" placeholder="E.g. Vo" width="400px"/>
                        <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                      </FormControl>
                    )
                    }
                  </Field>

                  {/* DOB */}
                  <Field name="dob" validate={this.validateDOB}>
                    {
                    ({ field, form }: { field: string, form: any }) => (
                      <FormControl isInvalid={form.errors.dob && form.touched.dob} style={{marginTop: 20}}>
                        <FormLabel htmlFor="dob">Date of Birth</FormLabel>
                        <Input {...field} id="dob" placeholder="E.g. 30-12-2021" width="400px"/>
                        <FormErrorMessage>{form.errors.dob}</FormErrorMessage>
                      </FormControl>
                    )
                    }
                  </Field>
                  <Center style={{marginTop: 20}}>
                    <Button
                      mt={4}
                      textColor="white"
                      bg="#196b69"
                      height="48px"
                      width="400px"
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
                <Image height="320px" width="450px" src={customer} alt="Dan Abramov" />
            </div>
          </Flex>

          {/* Final padding page */}
          <div style={{ padding: 50 }}></div>
        </div>
      </div>
    );
  }
}