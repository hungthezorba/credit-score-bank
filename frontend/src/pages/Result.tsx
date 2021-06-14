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
    analysisLoading: boolean
  },
  configData: {
    minValue: number,
    maxValue: number,
    segmentNumber: number,
    segmentColors: string[]
  }
}

export default class Result extends React.Component<ResultPageProps, ResultPageState> {
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
        analysisLoading: false
      },
      configData: {
        minValue: 360,
        maxValue: 850,
        segmentNumber: 5,
        segmentColors: ["#9fc54c", "#70b352", "#e9af4b", "#d25b30", "#a32330"]
      }
    };
  }
  // Take the value and define its color
  textColor(value: number): string {
    const distance: number = (this.state.configData.maxValue - this.state.configData.minValue) / this.state.configData.segmentNumber;
    const seg = Math.floor((value - this.state.configData.minValue) / distance);
    return this.state.configData.segmentColors[seg];
  }

  render() {
    return (
      <div className="container">
        {/* Score Section */}
        <div>
          <p className="header">CREDIT SCORE</p>
          <div className="speedometer">
            <Speedometer
              minValue={this.state.configData.minValue}
              maxValue={this.state.configData.maxValue}
              segmentNumber={this.state.configData.segmentNumber}
              segmentColors={this.state.configData.segmentColors}
              resultScore={!this.state.loading.analysisLoading ? this.state.value.analysisValue : this.state.configData.minValue}
            />
          </div>
          <div style={{ margin: "0 auto", marginBottom: "10px", marginTop: "-10px" }}>
            <Skeleton
              width="75px"
              margin="0 auto"
              isLoaded={!this.state.loading.analysisLoading}
            >
              <p className="result-score" style={{ color: this.textColor(this.state.value.analysisValue) }}>{this.state.value.analysisValue}</p>
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