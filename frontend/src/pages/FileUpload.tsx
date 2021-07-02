import { useState, useEffect } from "react";
import {
  Box,
  Text,
  Spacer,
  HStack,
  Skeleton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Flex,
  Center,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  ModalOverlay,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { CheckIcon } from "@chakra-ui/icons";
import "../assets/css/FileUpload.css";
import Speedometer from "../components/Speedometer";
import { useMutation, gql } from "@apollo/client";

const HttpsProxyAgent = require('https-proxy-agent');

const axiosDefaultConfig = {
  baseURL: 'http://ec2-18-141-204-251.ap-southeast-1.compute.amazonaws.com',
  proxy: false,
  httpsAgent: new HttpsProxyAgent('http://ec2-18-141-204-251.ap-southeast-1.compute.amazonaws.com')
};

const axios = require('axios').create(axiosDefaultConfig);


const RESULT = gql`
  mutation recordCustomerScore(
    $customerId: Float!
    $posScore: Float!
    $negScore: Float!
  ) {
    recordCustomerScore(
      options: {
        customerId: $customerId
        posScore: $posScore
        negScore: $negScore
      }
    )
  }
`;

const FileUpload = () => {
  // Check when upload the file successfully
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Check when click on save button successfully
  const [validate, setValidate] = useState(false);

  // Check model loading
  const [loading, setLoading] = useState(true);

  // Score fetching from Model
  const [posScore, setPosScore] = useState(0);

  // Data config for speedometer
  const configData = {
    minValue: 0,
    maxValue: 99,
    segmentNumber: 3,
    segmentColors: ["#a32330", "#e9af4b", "#9fc54c"],
    segmentStops: [0, 40, 60, 99],
  };

  // Fixed value
  const value = {
    paymentHistory: 80,
    amountOwed: 70,
    creditHistoryLength: 64,
  };

  // Modal State
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Take the value and define its color
  function textColor(value: number): string {
    let segmentStops = configData.segmentStops;
    for (let i = 0; i < 3; i++) {
      if (value >= segmentStops[i] && value < segmentStops[i + 1]) {
        return configData.segmentColors[i];
      }
    }
    return configData.segmentColors[0];
  }

  function validateId(value: string) {
    let error;
    if (!value) {
      error = "Customer ID is required";
    } else if (!/^\d+$/.test(value)) {
      error = "Wrong Format. Input again!";
    }
    return error;
  }

  // Handle file upload
  async function handleFileUpload(event: any) {
    setUploadSuccess(true);

    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    let url = "/predict";

    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result: any) => {
        setLoading(false);
        setPosScore(result.data.prediction[0]);
      })
      .catch((error: any) => {
        console.log(JSON.stringify(error, null, 2));
        alert("Error happened. Try uploading the file again!");
        deleteOption();
      });
  }

  // Delete actions for deleting button
  function deleteOption() {
    setUploadSuccess(false);
    setLoading(true);
    setPosScore(0);
    setValidate(false);
    window.scrollTo(0, 0);
  }

  // Scrolling the page to top whenever being rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Apollo hook mutation
  const [result] = useMutation(RESULT);

  return (
    <div>
      {/* Upload file page */}
      {!uploadSuccess ? (
        <div className="form-container">
          <div className="form">
            <input
              type="file"
              accept=".csv"
              className="custom-file-input"
              onChange={handleFileUpload}
              required
            />
          </div>
        </div>
      ) : (
        <div className="container">

          {/* Score Section */}
          <div style={{ marginTop: 120 }}>
            <p className="header">CREDIT SCORE</p>
            <div className="speedometer">
              <Speedometer
                minValue={configData.minValue}
                maxValue={configData.maxValue}
                segmentNumber={configData.segmentNumber}
                segmentColors={configData.segmentColors}
                resultScore={
                  !loading
                    ? Number((posScore * 100).toFixed())
                    : configData.minValue
                }
                segmentStops={configData.segmentStops}
              />
            </div>
            <div
              style={{
                margin: "0 auto",
                marginBottom: "10px",
                marginTop: "-15px",
              }}
            >
              <Skeleton width="120px" margin="0 auto" isLoaded={!loading}>
                <p
                  className="result-score"
                  style={{
                    color: textColor(posScore * 100),
                  }}
                >
                  {Number((posScore * 100).toFixed(2))}
                </p>
              </Skeleton>
            </div>

            <hr className="style-two" />

            {/* Analytics Section */}
            <div style={{ marginTop: "30px" }}>
              <p className="header">ANALYSIS</p>
              <Flex marginTop="30px">

                {/* First */}
                <Box
                  maxW="300px"
                  height="80px"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  backgroundColor="#f1f4fb"
                >
                  <HStack color="white" spacing="10px">
                    <Box w="10px" h="80px" bg="#4FD1C5"></Box>
                    <Box
                      w="280px"
                      h="80px"
                      paddingTop="7px"
                      paddingBottom="7px"
                    >
                      <Skeleton
                        width="50px"
                        height="36px"
                        noOfLines={1}
                        isLoaded={!loading}
                      >
                        <Text color="#2C5282" fontSize="2xl" fontWeight="bold">
                          {value.paymentHistory}%
                        </Text>
                      </Skeleton>
                      <Box color="#94979e">Payment History</Box>
                    </Box>
                  </HStack>
                </Box>

                <Spacer />

                {/* Second */}
                <Box
                  maxW="300px"
                  height="80px"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  backgroundColor="#f1f4fb"
                >
                  <HStack color="white" spacing="10px">
                    <Box w="10px" h="80px" bg="#F6E05E"></Box>
                    <Box
                      w="280px"
                      h="80px"
                      paddingTop="7px"
                      paddingBottom="7px"
                    >
                      <Skeleton
                        width="50px"
                        height="36px"
                        noOfLines={1}
                        isLoaded={!loading}
                      >
                        <Text color="#2C5282" fontSize="2xl" fontWeight="bold">
                          {value.creditHistoryLength}%
                        </Text>
                      </Skeleton>
                      <Box color="#94979e">Length of Credit History</Box>
                    </Box>
                  </HStack>
                </Box>

                <Spacer />

                {/* Third */}
                <Box
                  maxW="300px"
                  height="80px"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  backgroundColor="#f1f4fb"
                >
                  <HStack color="white" spacing="10px">
                    <Box w="10px" h="80px" bg="#4FD1C5"></Box>
                    <Box
                      w="280px"
                      h="80px"
                      paddingTop="7px"
                      paddingBottom="7px"
                    >
                      <Skeleton
                        width="50px"
                        height="36px"
                        noOfLines={1}
                        isLoaded={!loading}
                      >
                        <Text color="#2C5282" fontSize="2xl" fontWeight="bold">
                          {value.amountOwed}%
                        </Text>
                      </Skeleton>
                      <Box color="#94979e">Amount Owed</Box>
                    </Box>
                  </HStack>
                </Box>
              </Flex>
            </div>
          </div>
          <Center style={{ paddingTop: 50 }}>
            <Flex>

              {/* Save Button */}
              <Button
                onClick={onOpen}
                mt={5}
                textColor="white"
                bg="#196b69"
                height="48px"
                width="250px"
              >
                Save the record
              </Button>

              {/* Space */}
              <div style={{ width: 50 }}></div>

              {/* Delete Button */}
              <Button
                onClick={() => {
                  onClose();
                  deleteOption();
                }}
                mt={5}
                colorScheme="red"
                height="48px"
                width="250px"
              >
                Delete the record
              </Button>
            </Flex>
          </Center>

          {/* Modal for Success Announcement*/}
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
                  <Flex style={{ marginLeft: "50px" }}>
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
                      Saved successfully!
                    </p>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
          ) : (
            <div>

              {/* Save Form */}
              <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered={true}
                motionPreset={"slideInBottom"}
              >
                <ModalOverlay />
                <ModalContent>
                  <Formik
                    initialValues={{
                      customerId: "",
                      posScore: posScore,
                      negScore: 1 - posScore,
                    }}
                    onSubmit={(values, actions) => {
                      result({
                        variables: {
                          customerId: Number(values.customerId),
                          posScore: values.posScore,
                          negScore: values.negScore,
                        },
                      })
                        .then(() => {
                          setValidate(true);
                          setTimeout(() => {
                            setUploadSuccess(false);
                            setLoading(true);
                            setPosScore(0);
                            setValidate(false);
                            onClose();
                            window.scrollTo(0, 0);
                          }, 3000);
                        })
                        .catch((err) => {
                          alert(
                            JSON.stringify(err, null, 2)
                          );
                          actions.setStatus(err.message);
                        });
                    }}
                  >
                    {() => (
                      <Form style={{ marginLeft: 50 }}>

                        {/* First Name */}
                        <Field name="customerId" validate={validateId}>
                          {({ field, form }: { field: string; form: any }) => (
                            <FormControl
                              isInvalid={
                                form.errors.customerId &&
                                form.touched.customerId
                              }
                            >
                              <FormLabel htmlFor="customerId">
                                Type the Customer ID here!
                              </FormLabel>
                              <Input
                                {...field}
                                id="customerId"
                                placeholder="Customer ID"
                                width="300px"
                              />
                              <FormErrorMessage>
                                {form.errors.customerId}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>

                        {/* Submit Button */}
                        <Button
                          mt={4}
                          textColor="white"
                          bg="#196b69"
                          height="48px"
                          width="100px"
                          type="submit"
                          style={{
                            marginLeft: "30%",
                            marginRight: "70%",
                          }}
                        >
                          Save
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </ModalContent>
              </Modal>
            </div>
          )}
        </div>
      )}

      {/* Final Padding Page */}
      <div style={{ paddingTop: 100 }}></div>
    </div>
  );
};

export default FileUpload;