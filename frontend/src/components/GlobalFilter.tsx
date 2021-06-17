import React, {FC, useState} from 'react';
import {Input, Flex, Heading, filter} from '@chakra-ui/react';
import './table.css';

interface Customer{
    name: string;
    score: string;
    date: string;
    interest_rate: string;
    months: string;
    loan_amount: string;
    id: number;
}

const defaultProps: Customer[] = [
    {
        "name":"Vo Tran Truong Duy",
        "score":"89",
        "date":"12/12/2019",
        "interest_rate":"10",
        "months":"6",
        "loan_amount":"15.000.000",
        "id":1
    },
    {
        "name":"Nguyen Ngoc Dang Hung",
        "score":"90",
        "date":"21/9/2019",
        "interest_rate":"4",
        "months":"3",
        "loan_amount":"8.000.000",
        "id":2
    },
    {
        "name":"Nguyen Pham Quoc Minh",
        "score":"90",
        "date":"8/3/2020",
        "interest_rate":"6",
        "months":"3",
        "loan_amount":"5.000.000",
        "id":3
    },
    {
        "name":"Dat Corn",
        "score":"90",
        "date":"7/11/2018",
        "interest_rate":"5",
        "months":"6",
        "loan_amount":"7.000.000",
        "id":4
    },
    {
        "name":"Thao Tho Ngoc",
        "score":"9",
        "date":"18/9/2020",
        "interest_rate":"7",
        "months":"12",
        "loan_amount":"20.000.000",
        "id":5
    },
    {
        "name":"Vu Duc Duy",
        "score":"69",
        "date":"11/4/2020",
        "interest_rate":"5",
        "months":"3",
        "loan_amount":"2.000.000",
        "id":5
    }
]

const GlobalFilter: React.FC = () => {
    const [customer, setCustomer]: [Customer[], (posts: Customer[]) => void] = React.useState(defaultProps);
    const [filter, setFilter]: [string, (search: string) => void] = React.useState("");

    const filterRequire = (event: {target: {value: string; }; }) =>{
        setFilter(event.target.value)
    } 

    return (
         <>
        <Flex alignItems="flex-end" justifyContent="flex-end">
                        
        <Flex style={{marginRight:"40px"}} >
            <Input value={filter || ''} onChange={filterRequire} placeholder="Search name ..."  type="text" mb={3}></Input>
            <i className="fas fa-search" style={{fontSize: "35px" , marginLeft:"10px"}}></i>
        </Flex>
        </Flex>
        <table>
            <tr>
                <th>Name</th>
                <th>Score</th>
                <th>Date</th>
                <th>Interest Rate</th>
                <th>Months</th>
                <th>Loan Amount</th>
            </tr>

            {customer.map((customer) => {
                    if (filter == "" || customer.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())){
                        return (
                            <tr>
                                <td>{customer.name}</td>
                                <td>{customer.score}</td>
                                <td>{customer.date}</td>
                                <td>{customer.interest_rate}</td>
                                <td>{customer.months}</td>
                                <td>{customer.loan_amount}</td>
                                
                            </tr>
                        );
                    }
                    
                    return null;
                
                })}
        </table>
        </>
        
       
    );
}
 
export default GlobalFilter;