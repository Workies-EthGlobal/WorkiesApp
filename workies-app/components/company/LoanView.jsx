
import { Box, Container, Heading, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import CompListItem  from "../employee/companyListitem";

export function LoanView(props){

    return (
        <Box p={5}>
            <Heading>Loan Requests</Heading>
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
                            <CompListItem lender={lender} key={idx}/>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
}