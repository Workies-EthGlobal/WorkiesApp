import {
    Heading,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';


export default function NotConnected() {
    return (

        <Stack
            spacing={4}
            w={'full'}
            maxW={'md'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={12}>
            <Heading>Please connect your wallet!</Heading>
        </Stack>
    );
}