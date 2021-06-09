import React from "react";
import Speedometer from "../components/Speedometer";
import "./Result.css";
import {
  Box,
  Text,
  Flex,
  Spacer,
  HStack,
  Skeleton
} from "@chakra-ui/react";

interface ResultPageProps {
}

interface ResultPageState {
  value: {
    analysisValue: number,
    paymentHistory: number,
    amountOwed: number,
    creditHistoryLength: number,
    newCredit: number,
    typedOfCreditUsed: number
  },
  loading: {
    speedometerLoading: boolean,
    analysisLoading: boolean
  }
}

export default class ResultPage extends React.Component<ResultPageProps, ResultPageState> {
  constructor(props: any) {
    super(props);

    // Mock data
    this.state = {
        value: {
            analysisValue: 811,
            paymentHistory: 80,
            amountOwed: 70,
            creditHistoryLength: 64,
            newCredit: 81,
            typedOfCreditUsed: 11,
        },
        loading: {
            speedometerLoading: false,
            analysisLoading: false
        }
    };
  }

  render() {
    return (
      <div className="container">
        {/* Score Section */}
        <div>
          <p className="header">CREDIT SCORE</p>
          <Skeleton
            width="500px"
            margin="0 auto"
            isLoaded={!this.state.loading.speedometerLoading}
          >
            <div className="speedometer">
              <Speedometer resultScore={this.state.value.analysisValue} />
            </div>
          </Skeleton>

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
                  <Box w="280px" h="80px" paddingTop="7px" paddingBottom="7px">
                    <Skeleton
                      width="50px"
                      height="36px"
                      noOfLines={1}
                      isLoaded={!this.state.loading.analysisLoading}
                    >
                      <Text color="#2C5282" fontSize="2xl" fontWeight="bold">
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
                  <Box w="10px" h="80px" bg="#4FD1C5"></Box>
                  <Box w="280px" h="80px" paddingTop="7px" paddingBottom="7px">
                    <Skeleton
                      width="50px"
                      height="36px"
                      noOfLines={1}
                      isLoaded={!this.state.loading.analysisLoading}
                    >
                      <Text color="#2C5282" fontSize="2xl" fontWeight="bold">
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
                  <Box w="280px" h="80px" paddingTop="7px" paddingBottom="7px">
                    <Skeleton
                      width="50px"
                      height="36px"
                      noOfLines={1}
                      isLoaded={!this.state.loading.analysisLoading}
                    >
                      <Text color="#2C5282" fontSize="2xl" fontWeight="bold">
                        {this.state.value.amountOwed}%
                      </Text>
                    </Skeleton>
                    <Box color="#94979e">Amount Owed</Box>
                  </Box>
                </HStack>
              </Box>
            </Flex>

            {/* Second */}
            <Flex marginTop="20px">
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
                  <Box w="10px" h="80px" bg="#F6E05E"></Box>
                  <Box w="280px" h="80px" paddingTop="7px" paddingBottom="7px">
                    <Skeleton
                      width="50px"
                      height="36px"
                      noOfLines={1}
                      isLoaded={!this.state.loading.analysisLoading}
                    >
                      <Text color="#2C5282" fontSize="2xl" fontWeight="bold">
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
                  <Box w="280px" h="80px" paddingTop="7px" paddingBottom="7px">
                    <Skeleton
                      width="50px"
                      height="36px"
                      noOfLines={1}
                      isLoaded={!this.state.loading.analysisLoading}
                    >
                      <Text color="#2C5282" fontSize="2xl" fontWeight="bold">
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
                  <Box w="10px" h="80px" bg="#F6E05E"></Box>
                  <Box w="280px" h="80px" paddingTop="7px" paddingBottom="7px">
                    <Skeleton
                      width="50px"
                      height="36px"
                      noOfLines={1}
                      isLoaded={!this.state.loading.analysisLoading}
                    >
                      <Text color="#2C5282" fontSize="2xl" fontWeight="bold">
                        {this.state.value.amountOwed}%
                      </Text>
                    </Skeleton>
                    <Box color="#94979e">Amount Owed</Box>
                  </Box>
                </HStack>
              </Box>
            </Flex>

            {/* Final padding page */}
            <div style={{ padding: 100 }}></div>
          </div>
        </div>
      </div>
    );
  }
}