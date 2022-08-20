import {
    Box,
    Flex,
    Text,
    VStack,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    Heading,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
} from "@chakra-ui/react";
import EmplListItem from "./EmplListItem";

export default function EmployeeListView() {
    const dummyData = [
        { loan: "5000", amountPaid: "1000", dueDate: "082022" },
        { loan: "10000", amountPaid: "3000", dueDate: "082022" },
        { loan: "10000", amountPaid: "2000", dueDate: "082022" },
        { loan: "5000", amountPaid: "1000", dueDate: "082022" },
        { loan: "10000", amountPaid: "3000", dueDate: "082022" },
        { loan: "10000", amountPaid: "2000", dueDate: "082022" },
    ];

    return (
        <Flex>
            <Box align="center">
                <Heading>Active Lenders</Heading>
                <Box overflowY="auto" maxHeight="300px">

                    <Table variant="striped" colorScheme="facebook">
                        <Thead position="sticky" top={0} bgColor="grey">
                            <Tr>
                                <Th color={"blackAlpha.900"}>Loan</Th>
                                <Th color={"blackAlpha.900"}>Amount Paid</Th>
                                <Th color={"blackAlpha.900"}>Due Date</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {dummyData.map((lender) => (
                                <EmplListItem lender={lender}/>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </Box>
        </Flex>
    );
}
