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

                    <Table variant="striped" colorScheme="telegram">
                        <Thead position="sticky" top={0} bgColor="grey">
                            <Tr>
                                <Th>First Name</Th>
                                <Th>Last Name</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {dummyData.map(({ first_name, last_name }) => (
                                <Tr>
                                    <Td>{first_name}</Td>
                                    <Td>{last_name}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>

                <VStack>
                    dummyData.map(
                    <EmplListItem />)
                </VStack>
            </Box>
        </Flex>
    );
}
