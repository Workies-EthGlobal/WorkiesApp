import { useState } from "react";
import {
    Container,
    Flex,
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    SimpleGrid,
    Heading,
} from "@chakra-ui/react";
import CompanyManagerFactory from "../../artifacts/contracts/CompanyManagerFactory.sol/CompanyManagerFactory.json";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "ethers";

export default function EmplDeployForm() {
    const [borrowAmount, setBorrowAmount] = useState("");
    const [dInterestRate, setdInterestRate] = useState("");
    const [loanDuration, setLoanDuration] = useState("");
    const employerAddress = "";
    const employeeAddress = ""; //Get from web3 context
    const tokenToBorrow = "";
    const superFluidHostAddress = "";
    const smartContractAddress = "0xb7713c47b22fdac7569eb9095955c6ad3b71879a";

    const { library, account, active } = useWeb3React();

    var contract = active
        ? new Contract(
            smartContractAddress,
            CompanyManagerFactory.abi,
            library.getSigner(account)
        )
        : "";

    const callContract = (event) => {
        event.preventDefault();

        //Todo: call smart contract
        console.log("entered function");
        console.log(account);
        if (contract != "") {
            console.log("called contract");
            console.log(contract);
            // contract.functions.createCompanyManagerContract("Workies", "WRK");

            contract.functions
                .getCompanyManagerContract(0)
                .then((result) => {
                    console.log(result);
                });
        }
    };

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
                                        <Input
                                            type="text"
                                            size="md"
                                            onChange={(event) =>
                                                setBorrowAmount(
                                                    event.currentTarget.value
                                                )
                                            }
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl id="name">
                                    <FormLabel>Desired Interest Rate</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement pointerEvents="none" />
                                        <Input
                                            type="text"
                                            size="md"
                                            onChange={(event) =>
                                                setdInterestRate(
                                                    event.currentTarget.value
                                                )
                                            }
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl id="name">
                                    <FormLabel>Loan Duration</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement pointerEvents="none" />
                                        <Input
                                            type="text"
                                            size="md"
                                            onChange={(event) =>
                                                setLoanDuration(
                                                    event.currentTarget.value
                                                )
                                            }
                                        />
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
