import { useEffect, useState } from "react";
import {
    useDisclosure,
    MenuItem,
    MenuList,
    MenuDivider,
} from "@chakra-ui/react";
import SelectWalletModal from "./WalletConnectModal";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors";

export default function WCMenuList() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        activate,
        deactivate,
    } = useWeb3React();
    const [provider, setProvider] = useState(false);

    const refreshState = () => {
        setProvider(false)
    };

    const disconnect = () => {
        refreshState();
        deactivate();
    };

    useEffect(() => {
        setProvider(true);
        if (provider) activate(connectors[provider]);
    }, []);

    return (

        <MenuList>
            <MenuItem onClick={onOpen}>
                Wallet Connect
            </MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuDivider />
            <MenuItem>Link 3</MenuItem>
            <SelectWalletModal isOpen={isOpen} closeModal={onClose} />

        </MenuList>


    );
}
