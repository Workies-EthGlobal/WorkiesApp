import { Box, Button, Td, Tr } from "@chakra-ui/react";

export default function EmplListItem(props){
    return(

        <Tr>
            <Td>{props.lender.loan}</Td>
            <Td>{props.lender.loan}</Td>
            <Td>{props.lender.loan}</Td>
        </Tr>
    )
}