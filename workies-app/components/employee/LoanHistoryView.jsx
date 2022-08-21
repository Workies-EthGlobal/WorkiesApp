import { Box, Container, Heading, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import EmplListItem from "./EmplListItem";

export default function LoanHistoryView(props) {
    return (
        <Box p={5} centerContent>
            <Heading>Loan History</Heading>
            <Box overflowY="auto" maxHeight="1000px" minW={"1000"}>
                <Table variant="striped" colorScheme="facebook">
                    <Thead position="sticky" bgColor="grey">
                        <Tr>
                            <Th color={"blackAlpha.900"}>Loan</Th>
                            <Th color={"blackAlpha.900"}>Amount Paid</Th>
                            <Th color={"blackAlpha.900"}>Due Date</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {props.data.map((lender, idx) => (
                            <EmplListItem lender={lender} key={idx}/>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
}
