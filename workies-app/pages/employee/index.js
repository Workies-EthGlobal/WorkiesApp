import { useState, useEffect } from "react";
import { Box, Text, VStack, Flex, HStack, Heading } from "@chakra-ui/react";
import { Contract } from "ethers";
import { useWeb3React } from "@web3-react/core";

import LoanFactory from "../../artifacts/contracts/LoanFactory.sol/LoanFactory.json";
import EmploymentLoan from "../../artifacts/contracts/EmploymentLoan.sol/EmploymentLoan.json";
import EmployeeListView from "../../components/employee/EmployeeListView";
import EmplDeployForm from "../../components/employee/EmplDeployForm";
import LoanHistoryView from "../../components/employee/LoanHistoryView";

export default function employee() {
    const factoryContractAddress = "0xA124387236E773435fa0f5F6FF2d54E3053D4c50";
    const { library, account, active, chainId, connector } = useWeb3React();
    const [activeLoans, setActiveLoans] = useState([]);

    useEffect(() => {
        updateActiveLoans();
        setActiveLoans(activeLoans)
    }, [active ]);


    async function updateActiveLoans() {
        console.log("updating active loans");
        var loanSC = active
            ? new Contract(
                  factoryContractAddress,
                  LoanFactory.abi,
                  library.getSigner(account)
              )
            : "";
        if (loanSC != "") {
            const l_id = await loanSC.functions.loanId();
            console.log(l_id)
            for (var id = 1; id <= l_id; id++) {
                const loanAddr = await loanSC.functions.idToLoan(id);
                console.log(loanAddr)
                const loanContract = new Contract(
                    loanAddr[0],
                    EmploymentLoan.abi,
                    library.getSigner(account)
                );
                console.log(loanContract)
                const tmp = await loanContract.functions.borrower();

                const loanOp = await loanContract.functions.loanOpen();
                setActiveLoans(current => [...current, loanContract])
            }
            console.log("all loans loaded");
            console.log(activeLoans);
        }
    }

    const dummyData = [
        { loan: "5000", amountPaid: "1000", dueDate: "082022" },
        { loan: "10000", amountPaid: "3000", dueDate: "082022" },
        { loan: "10000", amountPaid: "2000", dueDate: "082022" },
        { loan: "5000", amountPaid: "1000", dueDate: "082022" },
        { loan: "10000", amountPaid: "3000", dueDate: "082022" },
        { loan: "10000", amountPaid: "2000", dueDate: "082022" },
    ];

    return (
        <VStack>
            <VStack>
                <Heading mt={5} fontSize="4xl">
                    Credit Score
                </Heading>
                <Box p={6} borderRadius={"100"} background="blue.400">
                    <Text fontSize="4xl">640</Text>
                </Box>
            </VStack>

            <HStack>
                <EmplDeployForm runSetActiveLoans={updateActiveLoans} />
                <EmployeeListView data={activeLoans} />
            </HStack>

            <LoanHistoryView data={dummyData} />
        </VStack>
    );
}
