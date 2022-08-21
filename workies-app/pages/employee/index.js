import { Box, Text, VStack, Flex, HStack, Heading } from "@chakra-ui/react";

import EmployeeListView from "../../components/employee/EmployeeListView";
import EmplDeployForm from "../../components/employee/EmplDeployForm";
import LoanHistoryView from "../../components/employee/LoanHistoryView";

export default function employee() {
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
                <Heading mt={5} fontSize="4xl">Credit Score</Heading>
                <Box p={6} borderRadius={"100"} background="blue.400">
                    <Text fontSize="4xl">640</Text>
                </Box>
            </VStack>

            <HStack p={0} align="top">
                <EmplDeployForm />
                <EmployeeListView data={dummyData}/>
            </HStack>

            <LoanHistoryView data={dummyData}/>
        </VStack>
    );
}
