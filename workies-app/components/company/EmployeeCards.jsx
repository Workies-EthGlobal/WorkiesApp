import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import { useState } from "react";
import { getNFTSmartContractAddress, getEmployeeList } from "../web3/companyActions";
import { useWeb3React } from "@web3-react/core";
import CompanyManagerFactory from "../../artifacts/contracts/CompanyManagerFactory.sol/CompanyManagerFactory.json";
import { Contract } from "ethers";


export default function EmployeeCards() {
    const [employeeList, setEmployeeList] = useState([]);

    const smartContractAddress = "0xad0448749ac74ad9c3f873abee181c7080dca09f";

    const { account, active, library } = useWeb3React();

    var factoryContract = active
        ? new Contract(
            smartContractAddress,
            CompanyManagerFactory.abi,
            library.getSigner(account)
        )
        : "";


    const handleConnect = (event) => {
        event.preventDefault();
        console.log(factoryContract, account);
        getNFTSmartContractAddress(factoryContract, account).then((address) => {
            getEmployeeList(employerContract, address).then((employeeList) => setEmployeeList(employeeList));
        })
        console.log(NFTContractAddress);

    }
    return (
        <Center spacing={4}
            w={'full'}
            maxW={'md'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            p={6}
            my={12}>
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                    size={'xl'}
                    src={
                        'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                    }
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                    _after={{
                        content: '""',
                        w: 4,
                        h: 4,
                        bg: 'green.300',
                        border: '2px solid white',
                        rounded: 'full',
                        pos: 'absolute',
                        bottom: 0,
                        right: 3,
                    }}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    Employee Name
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    loan: {true ? <CheckCircleIcon w={3} h={3} color='green.500' /> : <WarningIcon w={3} h={3} color='red.500' />}
                </Text>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    credit score: {true ? <CheckCircleIcon w={3} h={3} color='green.500' /> : <WarningIcon w={3} h={3} color='red.500' />}
                </Text>
                <Text>
                    Incoming Monthly Salary
                </Text>
                <Text>
                    Pending Loan
                </Text>

                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Loan
                    </Button>
                </Stack>
            </Box>
        </Center>

    );
}