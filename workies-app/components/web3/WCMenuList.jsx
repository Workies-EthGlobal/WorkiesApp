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
        active
    } = useWeb3React();

    const [provider, setProvider] = useState(false);

    const refreshState = () => {
        window.localStorage.setItem("provider", undefined);
    };


    const disconnect = () => {
        refreshState();
        deactivate();
    };

    useEffect(() => {
        const provider = window.localStorage.getItem("provider");
        if (provider) activate(connectors[provider]);
    }, [activate]);

    return (

        <MenuList>

            {!active ? (
                <MenuItem onClick={onOpen}>Connect Wallet</MenuItem>
            ) : (
                <MenuItem onClick={disconnect}>Disconnect</MenuItem>
            )}

            <MenuItem>Link 2</MenuItem>
            <MenuDivider />
            <MenuItem>Link 3</MenuItem>
            <SelectWalletModal isOpen={isOpen} closeModal={onClose} />

        </MenuList>


    );
}
