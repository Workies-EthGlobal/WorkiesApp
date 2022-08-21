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
        <Container overflow="hidden" centerContent>
            <Heading>Active Loans</Heading>
            <Box overflowY="auto" maxHeight="1000px">
                <Table variant="striped" colorScheme="facebook">
                    <Thead position="sticky" bgColor="grey">
                        <Tr>
                            <Th color={"blackAlpha.900"}>Loan</Th>
                            <Th color={"blackAlpha.900"}>Amount Paid</Th>
                            <Th color={"blackAlpha.900"}>Due Date</Th>
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
