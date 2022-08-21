import { Box, Button, Td, Text, Tr } from "@chakra-ui/react";

export default function EmplListItem(props) {
    // var contractAddress = "";
    // var borrowAmount = "";
    // var flowRate = "";
    // var totalRemaining = 0;

    // async function parseData() {
    //     contractAddress = await props.lender.address;
    //     borrowAmount = await props.lender.borrowAmount;
    //     flowRate = await props.lender.getPaymentFlowRate;
    //     totalRemaining = await props.lender.getTotalAmountRemaining;
    // }

    // parseData();

    return (
        <Tr>
            <Td maxW={200}>
                {props.lender.address}
            </Td>
            <Td>{props.lender.borrowAmount}</Td>
            <Td>{props.lender.getPaymentFlowRate}</Td>
            <Td>{props.lender.getTotalAmountRemaining}</Td>
        </Tr>
    );
}
