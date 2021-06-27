import React from "react";
import { createClient, dedupExchange, cacheExchange, Provider } from "urql";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";
import UploadForm from "../components/UploadForm";
import { Box, Text, Flex, Spacer, HStack, Skeleton } from "@chakra-ui/react";
import "../assets/css/FileUpload.css";
import Speedometer from "../components/Speedometer";

interface ResultPageProps {}

interface ResultPageState {
  uploadSuccess: boolean;
  value: {
    analysisValue: number;
    paymentHistory: number;
    amountOwed: number;
    creditHistoryLength: number;
    newCredit: number;
    typedOfCreditUsed: number;
  };
  loading: {
    analysisLoading: boolean;
  };
  configData: {
    minValue: number;
    maxValue: number;
    segmentNumber: number;
    segmentColors: string[];
    segmentStops: number[];
  };
}

const client = createClient({
  url: "something", // The graphql query url
  exchanges: [dedupExchange, cacheExchange, multipartFetchExchange],
});

export default class FileUpload extends React.Component<
  ResultPageProps,
  ResultPageState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      uploadSuccess: false,
      value: {
        analysisValue: 58,
        paymentHistory: 80,
        amountOwed: 70,
        creditHistoryLength: 64,
        newCredit: 81,
        typedOfCreditUsed: 11,
      },
      loading: {
        analysisLoading: true,
      },
      configData: {
        minValue: 0,
        maxValue: 99,
        segmentNumber: 3,
        segmentColors: ["#a32330", "#e9af4b", "#9fc54c"],
        segmentStops: [0, 40, 60, 99],
      },
    };
  }

  // Take the value and define its color
  textColor(value: number): string {
    let segmentStops = this.state.configData.segmentStops;
    for (let i = 0; i < 3; i++) {
      if (value >= segmentStops[i] && value < segmentStops[i + 1]) {
        return this.state.configData.segmentColors[i];
      }
    }
    return this.state.configData.segmentColors[0];
  }

  render() {
    return (
      <div>
        {!this.state.uploadSuccess ? (
          <Provider value={client}>
            <main>
              <UploadForm />
            </main>
          </Provider>
        ) : (
          <div className="container">
            {/* Score Section */}
            <div style={{ marginTop: 120 }}>
              <p className="header">CREDIT SCORE</p>
              <div className="speedometer">
                <Speedometer
                  minValue={this.state.configData.minValue}
                  maxValue={this.state.configData.maxValue}
                  segmentNumber={this.state.configData.segmentNumber}
                  segmentColors={this.state.configData.segmentColors}
                  resultScore={
                    !this.state.loading.analysisLoading
                      ? this.state.value.analysisValue
                      : this.state.configData.minValue
                  }
                  segmentStops={this.state.configData.segmentStops}
                />
              </div>
              <div
                style={{
                  margin: "0 auto",
                  marginBottom: "10px",
                  marginTop: "-15px",
                }}
              >
                <Skeleton
                  width="75px"
                  margin="0 auto"
                  isLoaded={!this.state.loading.analysisLoading}
                >
                  <p
                    className="result-score"
                    style={{
                      color: this.textColor(this.state.value.analysisValue),
                    }}
                  >
                    {this.state.value.analysisValue}
                  </p>
                </Skeleton>
              </div>

              <hr className="style-two" />

              {/* Analytics Section */}
              <div style={{ marginTop: "30px" }}>
                <p className="header">ANALYSIS</p>

                {/* First */}

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
                          isLoaded={!this.state.loading.analysisLoading}
                        >
                          <Text
                            color="#2C5282"
                            fontSize="2xl"
                            fontWeight="bold"
                          >
                            {this.state.value.paymentHistory}%
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
                          isLoaded={!this.state.loading.analysisLoading}
                        >
                          <Text
                            color="#2C5282"
                            fontSize="2xl"
                            fontWeight="bold"
                          >
                            {this.state.value.creditHistoryLength}%
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
                          isLoaded={!this.state.loading.analysisLoading}
                        >
                          <Text
                            color="#2C5282"
                            fontSize="2xl"
                            fontWeight="bold"
                          >
                            {this.state.value.amountOwed}%
                          </Text>
                        </Skeleton>
                        <Box color="#94979e">Amount Owed</Box>
                      </Box>
                    </HStack>
                  </Box>
                </Flex>
              </div>
            </div>
          </div>
        )}

        {/* Final Padding Page */}
        <div style={{ paddingTop: 100 }}></div>
      </div>
    );
  }
}
