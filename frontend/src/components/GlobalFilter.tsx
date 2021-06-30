import React from "react";
import { Input, Flex } from "@chakra-ui/react";
import "../assets/css/Table.css";
import { useQuery, gql } from "@apollo/client";
import { Spinner, Center } from "@chakra-ui/react";

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

  const { loading, data, error } = useQuery(CUS_CREDIT_HISTORY_LIST);
  const convertDate = (unixTimestamp: number) => {
    unixTimestamp /= 1;
    const result = new Date(unixTimestamp);
    const humanDateFormat = result.toLocaleString();
    return humanDateFormat;
  };
  if (loading) {
    return (
      <>
      <Center style={{paddingTop: 100}}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        </Center>
      </>
    );
  } else {
    return (
      <>
        <Flex alignItems="flex-end" justifyContent="flex-end">
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
            <th>Data Of Birth</th>
          </tr>
          {data.customers.map((val: any) => {
            const { id, lastName, firstName, creditHistoryList, dateOfBirth } =
              val;
            const score = creditHistoryList[0];

            if (!(score == undefined)) {
              const now = new Date(score.createdAt * 1);

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
                    <td>{(score.negScore * 100).toFixed(2)}</td>
                    <td>{(score.posScore * 100).toFixed(2)}</td>
                    <td>
                      {date +
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
        </table>
      </>
    );
  }
};

export default GlobalFilter;
