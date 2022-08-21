
import { Box, Button, Td, Tr } from "@chakra-ui/react";
import {utils} from  "ethers";
export default function CompListItem(props){
    console.log(props.lender.amount)
    return(
        <Tr>
            <Td>{props.lender.borrower[0]}</Td>
            <Td>{utils.formatEther(props.lender.amount[0])}</Td>
            <Td  onClick={props.lender.lend()} >Approve</Td>
        </Tr>
    );
}
