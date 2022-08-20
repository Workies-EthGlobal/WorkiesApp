import { Box, Text, VStack, Flex, HStack } from "@chakra-ui/react";

import EmployeeListView from "../../components/employee/EmployeeListView";
import EmplDeployForm from "../../components/employee/EmplDeployForm";

export default function employee() {
    return (
        <VStack>
            <Flex>
                <VStack>
                    <Text fontSize="md">Credit Score</Text>
                    <Text fontSize="4xl">640</Text>
                </VStack>
            </Flex>

            <HStack>
                <EmplDeployForm/>
                <EmployeeListView />
            </HStack>
        </VStack>
    );
}
