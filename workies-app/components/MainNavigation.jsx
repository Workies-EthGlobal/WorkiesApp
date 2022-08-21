import {
    Box,
    Flex,
    Text,
    HStack,
    Img,
    Button,
    Menu,
    MenuButton,
    useColorModeValue,
    Avatar,
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import NavLink from "./NavLink";
import NextLink from "next/link";
import { truncateAddress } from "./web3/utils";
import { useWeb3React } from "@web3-react/core";

import WCMenuList from "./web3/WCMenuList";


export default function MainNavigation() {

    const { account, active } = useWeb3React()

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
                    {active ? <CheckCircleIcon w={3} h={3} color='green.500' /> : <WarningIcon w={3} h={3} color='red.500' />}

                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={"full"}
                            variant={"link"}
                            cursor={"pointer"}
                            minW={0}
                        >
                            <Text>

                                {truncateAddress(account)}
                            </Text>
                            <Avatar
                                size={"sm"}
                                src={
                                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                                }
                            />
                        </MenuButton>

                        <WCMenuList />

                    </Menu>
                </Flex>
            </Flex>

        </Box >
    );
}
