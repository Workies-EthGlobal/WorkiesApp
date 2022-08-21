import {
    Box,
    Flex,
    Heading,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Container,
    propNames,
} from "@chakra-ui/react";
import EmplListItem from "./EmplListItem";

export default function EmployeeListView(props) {
    return (
        <Container overflow="hidden" minW="700" centerContent>
            <Heading>Active Loans</Heading>
            <Box overflowY="auto" maxHeight="400px">
                <Table variant="striped" colorScheme="facebook">
                    <Thead position="sticky" bgColor="grey">
                        <Tr>
                            <Th color={"blackAlpha.900"}>Address</Th>
                            <Th color={"blackAlpha.900"}>Borrow Amount</Th>
                            <Th color={"blackAlpha.900"}>Flow Rate</Th>
                            <Th color={"blackAlpha.900"}>Total Remaining</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        { props.data.map((lender, idx) => (
                            <EmplListItem key={idx} lender={lender} />
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Container>
    );
}
