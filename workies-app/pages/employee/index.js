import { useState } from "react";
import { Box, Text, VStack, Flex, HStack, Heading } from "@chakra-ui/react";
import { Contract } from "ethers";
import { useWeb3React } from "@web3-react/core";

import EmploymentLoan from "../../artifacts/contracts/EmploymentLoan.sol/EmploymentLoan.json";
import EmployeeListView from "../../components/employee/EmployeeListView";
import EmplDeployForm from "../../components/employee/EmplDeployForm";
import LoanHistoryView from "../../components/employee/LoanHistoryView";

export default function employee() {
    const factoryContractAddress = "0xA124387236E773435fa0f5F6FF2d54E3053D4c50";
    const { library, account, active, chainId, connector } = useWeb3React();
    const [activeLoans, setActiveLoans] = useState([]);

    function updateActiveLoans() {
        var loanSC = active
            ? new Contract(
                  factoryContractAddress,
                  EmploymentLoan.abi,
                  library.getSigner(account)
              )
            : "";

        if (loanSC != "") {
            for (id = 1; id <= loanSC.loanId(); id++) {
                loan = loanSC.idToLoan(id);
                if (loan.borrower() == _address) {
                    total++;
                    if (loan.loanOpen()) {
                        opened++;
                        setActiveLoans([...loan]);
                    }
                }
            }
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
                <EmplDeployForm />
                <EmployeeListView data={dummyData} />
            </HStack>

            <LoanHistoryView data={dummyData} />
        </VStack>
    );
}
