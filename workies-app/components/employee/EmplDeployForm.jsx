import { useState } from "react";
import {
    Container,
    Flex,
    Box,
    Button,
    VStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    SimpleGrid,
    Form
} from "@chakra-ui/react";

export default function EmplDeployForm() {
    const [borrowAmount, setBorrowAmount] = useState("");
    const [dInterestRate, setdInterestRate] = useState("");
    const [loanDuration, setLoanDuration] = useState("");
    const employerAddress = "";
    const employeeAddress = ""; //Get from web3 context
    const tokenToBorrow = "";
    const superFluidHostAddress = "";
    
    const callContract = event => {
        event.preventDefault();
        
        //Todo: call smart contract
    }
    
    return (

        <Container maxW="full" centerContent overflow="hidden">
            <Heading>Request Loan</Heading>
            <Flex>
                <Box bg="#02054B" color="white" borderRadius="lg" m={1}>
                    <Box
                        bg="white"
                        borderRadius="lg"
                        m={2}
                        color="#0B0E3F"
                        p={5}
                    >
                           <form onSubmit={callContract}>
                            <SimpleGrid columns={1} spacing={2}>
                                
                                <FormControl id="name">
                                    <FormLabel>Borrow Amount</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement pointerEvents="none" />
                                        <Input type="text" size="md" onChange={event => setBorrowAmount(event.currentTarget.value)}/>
                                    </InputGroup>
                                </FormControl>

                                <FormControl id="name">
                                    <FormLabel>Desired Interest Rate</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement pointerEvents="none" />
                                        <Input type="text" size="md" onChange={event => setdInterestRate(event.currentTarget.value)}/>
                                    </InputGroup>
                                </FormControl>

                                <FormControl id="name">
                                    <FormLabel>Loan Duration</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement pointerEvents="none" />
                                        <Input type="text" size="md" onChange={event => setLoanDuration(event.currentTarget.value)}/>
                                    </InputGroup>
                                </FormControl>

                                <FormControl id="name" float="right">
                                    <Button
                                        variant="solid"
                                        bg="#0D74FF"
                                        color="white"
                                        type="submit"
                                        _hover={{}}
                                    >
                                        Submit
                                    </Button>
                                </FormControl>
                                
                            </SimpleGrid>

                            </form>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}
