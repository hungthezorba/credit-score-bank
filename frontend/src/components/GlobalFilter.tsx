import React, { useState } from "react";
import { Input, Flex } from "@chakra-ui/react";
import "../assets/css/Table.css";
import { useQuery, gql } from "@apollo/client";
import { Spinner, Center, Spacer, Button } from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";

const CUS_CREDIT_HISTORY_LIST = gql`
  query CustomerCreditHistoryList {
    customers {
      id
      firstName
      lastName
      dateOfBirth
      creditHistoryList {
        negScore
        posScore
        createdAt
      }
    }
  }
`;

const GlobalFilter: React.FC = () => {
  const [filter, setFilter]: [string, (search: string) => void] =
    React.useState("");

  const filterRequire = (event: { target: { value: string } }) => {
    setFilter(event.target.value);
  };

  const { loading, data } = useQuery(CUS_CREDIT_HISTORY_LIST);
  const [isLoading, setIsLoading] = useState(false);

  if (loading) {
    return (
      <>
        <Center style={{ paddingTop: 100 }}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#196b69"
            size="xl"
          />
        </Center>
      </>
    );
  } else {
    return (
      <>
        <Flex style={{ paddingBottom: 10 }}>
          <div style={{ marginLeft: "40px" }}>
            <Button
              isLoading={isLoading}
              leftIcon={<RepeatClockIcon />}
              colorScheme="orange"
              variant="solid"
              onClick={() => {
                window.location.reload();
                setIsLoading(true);
              }}
            >
              Reload
            </Button>
          </div>

          <Spacer />
          <Flex style={{ marginRight: "40px" }}>
            <Input
              value={filter || ""}
              onChange={filterRequire}
              placeholder="Search name ..."
              type="text"
              mb={3}
            ></Input>
            <i
              className="fas fa-search"
              style={{ fontSize: "35px", marginLeft: "10px" }}
            ></i>
          </Flex>
        </Flex>

        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Negative Score</th>
            <th>Positive Score</th>
            <th>Created At</th>
            <th>Date Of Birth</th>
          </tr>
          {data.customers.map((val: any) => {
            const { id, lastName, firstName, creditHistoryList, dateOfBirth } =
              val;
            const score = creditHistoryList;

            return (
              <tbody>
                {score.map((value: any) => {
                  if (!(value == undefined)) {
                    const now = new Date(value.createdAt * 1);

                    var hour = now.toLocaleTimeString();
                    console.log(hour);
                    var year = now.getFullYear();
                    var month = now.getMonth() + 1;
                    var date = now.getDate();

                    if (
                      filter == "" ||
                      val.firstName
                        .toLocaleLowerCase()
                        .includes(filter.toLocaleLowerCase())
                    ) {
                      return (
                        <tr>
                          <td>{id}</td>
                          <td>
                            {firstName} {lastName}
                          </td>
                          <td>{(value.negScore * 100).toFixed(2)}</td>
                          <td>{(value.posScore * 100).toFixed(2)}</td>
                          <td>
                            {hour + " " + (date < 10 ? "0" : "") +
                              date +
                              "-" +
                              (month < 10 ? "0" : "") +
                              month +
                              "-" +
                              year}
                          </td>
                          <td>
                            {dateOfBirth.substring(8, 10) +
                              "-" +
                              dateOfBirth.substring(5, 7) +
                              "-" +
                              dateOfBirth.substring(0, 4)}
                          </td>
                        </tr>
                      );
                    }
                  }
                })}
              </tbody>
            );
          })}
        </table>
      </>
    );
  }
};

export default GlobalFilter;
