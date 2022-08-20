import { useEffect, useState } from "react";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Img,
    Text,
    Avatar,
} from "@chakra-ui/react";
import NavLink from "./NavLink";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon, Search2Icon } from "@chakra-ui/icons";
import SelectWalletModal from "../components/WalletConnectModal";
import { useWeb3React } from "@web3-react/core";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";
import { networkParams } from "../components/networks";
import { connectors } from "../components/connectors";
import { toHex, truncateAddress } from "../components/utils";

export default function MainNavigation() {
    return (
        <Box
            bg={useColorModeValue("rgba(12,10,29,1.0)", "blue.900")}
            px={4}
            sx={{
                position: "-webkit-sticky",
                /* Safari */ position: "sticky",
                top: "0",
                zIndex: "1",
            }}
            opacity={0.95}
        >
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <HStack spacing={8} alignItems={"center"}>
                    <NextLink href="/">
                        <Img
                            boxSize="100px"
                            objectFit="contain"
                            src="/assets/logo1.png"
                            alt="Workies"
                        />
                    </NextLink>

                    <NavLink />
                </HStack>

                <Flex alignItems={"center"}>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={"full"}
                            variant={"link"}
                            cursor={"pointer"}
                            minW={0}
                        >
                            <Avatar
                                size={"sm"}
                                src={
                                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                                }
                            />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <HStack></HStack>
                            </MenuItem>
                            <MenuItem>Link 2</MenuItem>
                            <MenuDivider />
                            <MenuItem>Link 3</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Box>
    );
}
