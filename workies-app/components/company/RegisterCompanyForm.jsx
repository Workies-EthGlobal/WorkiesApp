import { useState } from "react"
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useWeb3React } from '@web3-react/core';
import NotConnected from "../NotConnected";
import { createCompanyManager } from "../web3/companyActions";
import { Contract } from "ethers";
const smartContractAddress = "0xad0448749ac74ad9c3f873abee181c7080dca09f";
import CompanyManagerFactory from "../../pages/abis/CompanyManagerFactory.json";


export default function RegisterCompany() {

    const [companyName, setCompanyName] = useState("");
    const [companyToken, setCompanyToken] = useState("");
    const { library, account, active } = useWeb3React();

    var facotryContract = active
        ? new Contract(
            smartContractAddress,
            CompanyManagerFactory.abi,
            library.getSigner(account)
        )
        : "";
    const handleSubmit = event => {
        event.preventDefault();
        console.log(companyName, companyToken);
        createCompanyManager(facotryContract, account, companyName, companyToken);

    }

    return (
        <form onSubmit={handleSubmit}>

            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={'gray.50'}>
                {!active ? <NotConnected /> :
                    <Stack
                        spacing={4}
                        w={'full'}
                        maxW={'md'}
                        bg={'white'}
                        rounded={'xl'}
                        boxShadow={'lg'}
                        p={6}
                        my={12}>
                        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                            Register your company
                        </Heading>
                        <FormControl id="userName">
                            <FormLabel>Company Logo</FormLabel>
                            <Stack direction={['column', 'row']} spacing={6}>
                                <Center>
                                    <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                                        <AvatarBadge
                                            as={IconButton}
                                            size="sm"
                                            rounded="full"
                                            top="-10px"
                                            colorScheme="red"
                                            aria-label="remove Image"
                                            icon={<SmallCloseIcon />}
                                        />
                                    </Avatar>
                                </Center>
                                <Center w="full">
                                    <Button w="full">Change Logo</Button>
                                </Center>
                            </Stack>
                        </FormControl>
                        <FormControl id="companyName" isRequired>
                            <FormLabel>Company Name</FormLabel>
                            <Input
                                placeholder="CompanyName"
                                _placeholder={{ color: 'gray.500' }}
                                type="text"
                                onChange={event => setCompanyName(event.currentTarget.value)}
                            />
                        </FormControl>
                        <FormControl id="companyToken" isRequired>
                            <FormLabel>Company Token</FormLabel>
                            <Input
                                placeholder="TKN"
                                _placeholder={{ color: 'gray.500' }}
                                type="text"
                                onChange={event => setCompanyToken(event.currentTarget.value)}
                            />
                        </FormControl>
                        <Stack spacing={6} direction={['column', 'row']}>
                            <Button
                                bg={'red.400'}
                                color={'white'}
                                w="full"
                                _hover={{
                                    bg: 'red.500',
                                }}>
                                Cancel
                            </Button>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                type="submit"
                                w="full"
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                }

            </Flex>
        </form>

    );
}