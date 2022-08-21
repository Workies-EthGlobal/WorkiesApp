import { useEffect, useState } from "react";
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Box
} from '@chakra-ui/react';
import NotConnected from "../NotConnected";
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useWeb3React } from "@web3-react/core";



export default function RegisterEmployee() {

    const [employeeName, setEmployeeName] = useState("");
    const [employeeSalary, setEmployeeSalary] = useState("");

    const { active } = useWeb3React();

    const handleSubmit = event => {
        event.preventDefault();
        console.log(employeeName, employeeSalary);
    };

    return (


        <form onSubmit={handleSubmit}>

            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    bg={useColorModeValue('white', 'gray.700')}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={12}>
                    {!active ? <NotConnected /> :
                        <Stack>
                            <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                                Register an employee
                            </Heading>
                            <FormControl id="userName" >
                                <FormLabel>Employee photo</FormLabel>
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
                                        <Button w="full">Change Photo</Button>
                                    </Center>
                                </Stack>
                            </FormControl>
                            <FormControl id="userName" isRequired>
                                <FormLabel>Employee name</FormLabel>
                                <Input
                                    placeholder="UserName"
                                    _placeholder={{ color: 'gray.500' }}
                                    type="text"
                                    onChange={event => setEmployeeName(event.currentTarget.value)}
                                />
                            </FormControl>
                            <FormControl id="email" isRequired>
                                <FormLabel>Employee Salary</FormLabel>
                                <Input
                                    placeholder="20000"
                                    onChange={event => setEmployeeSalary(event.currentTarget.value)}
                                    _placeholder={{ color: 'gray.500' }}
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
                </Stack>
            </Flex>
        </form>
    );
}