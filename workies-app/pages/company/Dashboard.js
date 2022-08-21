import { useState } from "react";
import { getNFTSmartContractAddress } from "../../components/web3/companyActions";
import { Box, Button, Text } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import CompanyManagerFactory from "../../pages/abis/CompanyManagerFactory.json";
import { Contract } from "ethers";


export default function dashboard() {
    const [companyList, setCommpanyList] = useState("");

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
            setCommpanyList(address);
        })
        console.log(companyList);

    }

    return (
        <Box>
            <Button onClick={handleConnect}>

            </Button>
            <Text>
                {companyList}

            </Text>
        </Box>

    );
}