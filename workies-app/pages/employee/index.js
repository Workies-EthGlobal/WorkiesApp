import { Box, Text, VStack, Flex } from "@chakra-ui/react";

import EmployeeListView from "../../components/EmployeeListView";

export default function employee() {
    return (
        <VStack>
            <Flex>
                <VStack>
                    <Text fontSize="md">Credit Score</Text>
                    <Text fontSize="4xl">640</Text>
                </VStack>
            </Flex>

            <EmployeeListView />
        </VStack>
    );
}
