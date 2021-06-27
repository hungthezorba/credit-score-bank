import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Flex,
  Image,
  Center,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  ModalOverlay
} from "@chakra-ui/react";
import { CheckIcon } from '@chakra-ui/icons';
import { Formik, Form, Field } from "formik";
import { useMutation, gql } from "@apollo/client";
import customer_picture from "../assets/img/customer.jpg";

const CUSTOMER = gql`
  mutation registerCustomer(
    $firstName: String!
    $lastName: String!
    $dateOfBirth: String!
  ) {
    registerCustomer(
      options: {
        firstName: $firstName
        lastName: $lastName
        dateOfBirth: $dateOfBirth
      }
    ) {
      customer {
        firstName
        lastName
        dateOfBirth
      }
    }
  }
`;

const CustomerUpdate = () => {
  const [validate, setValidate] = useState(false);

  function validateFirstName(value: any) {
    let error;
    if (!value) {
      error = "First Name is required";
    } else if (!/^([a-zA-Z ]){2,30}$/.test(value)) {
      error = "Wrong Format. Input again!";
    }
    return error;
  }

  function validateLastName(value: any) {
    let error;
    if (!value) {
      error = "Last Name is required";
    } else if (!/^([a-zA-Z ]){2,30}$/.test(value)) {
      error = "Wrong Format. Input again!";
    }
    return error;
  }

  function validateDateOfBirth(value: any) {
    let error;
    if (!value) {
      error = "Date of Birth is required";
    } else if (
      !/^(0[1-9]|[12][0-9]|3[01])[- .](0[1-9]|1[012])[- .](19|20)\d\d$/.test(
        value
      )
    ) {
      error = "Wrong Format. Input again!";
    }
    return error;
  }

  // Apollo hook mutation
  const [customer] = useMutation(CUSTOMER);

  // Modal State
  const { onOpen } = useDisclosure();

  return (
    <div style={{ paddingTop: 100 }}>
      <div className="container">
        <p className="header">NEW CUSTOMER INPUT</p>
        <Flex style={{ marginTop: 50 }}>
          <Formik
            initialValues={{ firstName: "", lastName: "", dateOfBirth: "" }}
            onSubmit={(values, actions) => {
              customer({ variables: values })
                .then(() => {
                  setValidate(true);
                  setTimeout(() => {
                    window.location.reload();
                  }, 3000);
                })
                .catch((err) => {
                  alert(JSON.stringify(err, null, 2));
                  actions.setStatus(err.message);
                });
            }}
          >
            {() => (
              <Form style={{ marginLeft: 50 }}>
                {/* First Name */}
                <Field name="firstName" validate={validateFirstName}>
                  {({ field, form }: { field: string; form: any }) => (
                    <FormControl
                      isInvalid={
                        form.errors.firstName && form.touched.firstName
                      }
                    >
                      <FormLabel htmlFor="first-name">First name</FormLabel>
                      <Input
                        {...field}
                        id="first-name"
                        placeholder="E.g. Duy"
                        width="400px"
                      />
                      <FormErrorMessage>
                        {form.errors.firstName}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {/* Last Name */}
                <Field name="lastName" validate={validateLastName}>
                  {({ field, form }: { field: string; form: any }) => (
                    <FormControl
                      isInvalid={form.errors.lastName && form.touched.lastName}
                      style={{ marginTop: 20 }}
                    >
                      <FormLabel htmlFor="lastName">Last name</FormLabel>
                      <Input
                        {...field}
                        id="lastName"
                        placeholder="E.g. Vo"
                        width="400px"
                      />
                      <FormErrorMessage>
                        {form.errors.lastName}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {/* Date Of Birth */}
                <Field name="dateOfBirth" validate={validateDateOfBirth}>
                  {({ field, form }: { field: string; form: any }) => (
                    <FormControl
                      isInvalid={
                        form.errors.dateOfBirth && form.touched.dateOfBirth
                      }
                      style={{ marginTop: 20 }}
                    >
                      <FormLabel htmlFor="dateOfBirth">Date of Birth</FormLabel>
                      <Input
                        {...field}
                        id="dateOfBirth"
                        placeholder="E.g. 30-12-2021"
                        width="400px"
                      />
                      <FormErrorMessage>
                        {form.errors.dateOfBirth}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {/* Submit Button */}
                <Center style={{ marginTop: 20 }}>
                  <Button
                    mt={4}
                    textColor="white"
                    bg="#196b69"
                    height="48px"
                    width="400px"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Center>

                {/* Modal */}
                {validate ? (
                  <Modal
                    isOpen={true}
                    onClose={onOpen}
                    isCentered={true}
                    motionPreset={"slideInBottom"}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalBody>
                        <Flex style={{marginLeft: "50px"}}>
                          <CheckIcon w={8} h={8} color="green" />
                          <p
                            style={{
                              fontSize: "20px",
                              marginLeft: "5px",
                              textAlign: "center",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            Created successfully!
                          </p>
                        </Flex>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                ) : (
                  <></>
                )}

              </Form>
            )}
          </Formik>

          {/* Picture */}
          <div style={{ marginLeft: 150 }}>
            <Image
              height="320px"
              width="450px"
              src={customer_picture}
              alt="Dan Abramov"
            />
          </div>
        </Flex>

        {/* Final padding page */}
        <div style={{ padding: 50 }}></div>
      </div>
    </div>
  );
};

export default CustomerUpdate;