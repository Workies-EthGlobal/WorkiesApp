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

import LoanFactory from "../../artifacts/contracts/LoanFactory.sol/LoanFactory.json";
import CompanyManagerFactory from "../../artifacts/contracts/CompanyManagerFactory.sol/CompanyManagerFactory.json";

import { useWeb3React } from "@web3-react/core";
import { Framework } from "@superfluid-finance/sdk-core";
import { Contract, ethers } from "ethers";

export default function EmplDeployForm(props) {
    //const [activeLoans, setActiveLoans] = useState([]);
    const [borrowAmount, setBorrowAmount] = useState("");
    const [dInterestRate, setdInterestRate] = useState("");
    const [loanDuration, setLoanDuration] = useState("");
    const employeeAddress = ""; //Get from web3 context
    const tokenToBorrow = "";
    const superFluidHostAddress = "";
    const factoryContractAddress = "0xA124387236E773435fa0f5F6FF2d54E3053D4c50";

    const { library, account, active, chainId, connector } = useWeb3React();

    var contract = active
        ? new Contract(
              factoryContractAddress,
              LoanFactory.abi,
              library.getSigner(account)
          )
        : "";

    async function asyncCall() {
        const custm = new ethers.providers.JsonRpcProvider(
            "https://polygon-mumbai.infura.io/v3/786671decfea4241a9e3c811abcdf3fe"
        );

        const sf = await Framework.create({
            chainId: chainId,
            provider: new ethers.providers.Web3Provider(window.ethereum),
        });

        const daix = await sf.loadSuperToken("fDAIx");

        contract.functions
            .createNewLoan(
                ethers.utils.parseEther(borrowAmount),
                dInterestRate,
                loanDuration,
                "0xF3Bdd4Af08a606895A4bfF479A1aF0fb6E59BA04", //employer address
                account,
                daix.address,
                sf.settings.config.hostAddress
            )
            .then(
                (result) => {
                    result.wait(1).then(() => {
                        props.runSetActiveLoans();
                    });
                },
                (error) => {
                    console.log("Error: " + error);
                }
            );
    }

    const callContract = (event) => {
        event.preventDefault();

        if (contract != "") {
            asyncCall();
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
