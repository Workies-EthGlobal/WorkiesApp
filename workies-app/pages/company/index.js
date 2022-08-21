import { Box, Text, VStack, Flex, HStack } from "@chakra-ui/react";

import RegisterCompanyForm from "../../components/company/RegisterCompanyForm";
import { LoanView } from "../../components/company/LoanView";

export default function employee() {
    const dummyData = [
        { loan: "5000", amountPaid: "1000", dueDate: "082022" },
        { loan: "10000", amountPaid: "3000", dueDate: "082022" },
        { loan: "10000", amountPaid: "2000", dueDate: "082022" },
        { loan: "5000", amountPaid: "1000", dueDate: "082022" },
        { loan: "10000", amountPaid: "3000", dueDate: "082022" },
        { loan: "10000", amountPaid: "2000", dueDate: "082022" },
    ];
    return (
        <VStack>
            <RegisterCompanyForm />
            <LoanView data={dummyData}/>
        </VStack>
    );
}
