import React, {FC, useEffect, useState} from 'react';
import {Input, Flex, Heading, filter} from '@chakra-ui/react';
import '../assets/css/Table.css';
import {useQuery, gql} from "@apollo/client"


const CUS_CREDIT_HISTORY_LIST = gql`
    query CustomerCreditHistoryList {
        customers{
            id
            firstName
            lastName
            dateOfBirth
            creditHistoryList{
                negScore
                posScore
                createdAt
            }
        }
    }
`

const GlobalFilter: React.FC = () => {
    const [filter, setFilter]: [string, (search: string) => void] = React.useState("");

    const filterRequire = (event: {target: {value: string; }; }) =>{
        setFilter(event.target.value)
    } 

    const {loading, data} = useQuery(CUS_CREDIT_HISTORY_LIST)
    const convertDate = (unixTimestamp: number) => {
        unixTimestamp /= 1
        const result = new Date(unixTimestamp)
        const humanDateFormat = result.toLocaleString() 
        return humanDateFormat
    }
    if(loading) return null;

    return (
         <>
        <Flex alignItems="flex-end" justifyContent="flex-end">
                        
        <Flex style={{marginRight:"40px"}} >
            <Input value={filter || ''} onChange={filterRequire} placeholder="Search name ..."  type="text" mb={3}></Input>
            <i className="fas fa-search" style={{fontSize: "35px" , marginLeft:"10px"}}></i>
        </Flex>
        </Flex>
        {loading ? <></> : 
            (
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Negative Score</th>
                        <th>Positive Score</th>
                        <th>Created At</th>
                        <th>Data Of Birth</th>
                    </tr>
                    {data.customers.map((val:any) => {
                        const { id , lastName, firstName, creditHistoryList , dateOfBirth} = val
                        const score  = creditHistoryList[0]
                        const dateFormated = convertDate(score.createdAt)
                        if (filter == "" || val.firstName.toLocaleLowerCase().includes(filter.toLocaleLowerCase())){
                            return (
                                <tr>
                                    <td>{firstName} {lastName}</td>
                                    <td>{score.negScore}</td>
                                    <td>{score.posScore}</td>
                                    <td>{dateFormated}</td>
                                    <td>{dateOfBirth}</td>
                                </tr>
                            )
                        }
                        
                    })}
                    
                </table>
            )
        }
        
        </>
        
       
    );
}
 
export default GlobalFilter;