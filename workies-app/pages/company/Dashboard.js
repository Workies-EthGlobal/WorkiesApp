import { useState } from "react";
import { getNFTSmartContractAddress, getEmployeeList } from "../../components/web3/companyActions";
import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import CompanyManagerFactory from "../../pages/abis/CompanyManagerFactory.json";
import { Contract } from "ethers";
import EmployeeCard from "../../components/company/EmployeeCard";


export default function dashboard() {
    const [NFTContractAddress, setNFTContractAddress] = useState("");
    const [employeeList, setEmployeeList] = useState([]);

    const smartContractAddress = "0xad0448749ac74ad9c3f873abee181c7080dca09f";

    const { account, active, library } = useWeb3React();

    var factoryContract = active
        ? new Contract(
            smartContractAddress,
            CompanyManagerFactory.abi,
            library.getSigner(account)
        )
        : "";


    const handleConnect = (event) => {
        event.preventDefault();
        console.log(factoryContract, account);
        getNFTSmartContractAddress(factoryContract, account).then((address) => {
            setNFTContractAddress(address);
        })
        console.log(NFTContractAddress);

        getEmployeeList(employerContract, NFTContractAddress).then((employeeList) => setEmployeeList(employeeList))

    }


    const exampleList = [1, 1, 1]
    return (

        <Flex>
            {
                exampleList.map((employee) => <EmployeeCard />)
            }


        </Flex>
    );
}