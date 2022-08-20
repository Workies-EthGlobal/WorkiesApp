import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from "@chakra-ui/react";

export default function EmplDeployForm() {
    return (
        <Container
            bg="#9DC4FB"
            maxW="full"
            mt={0}
            centerContent
            overflow="hidden"
        >
            <Flex>
                <Box
                    bg="#02054B"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 5, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}
                >
                    <Box p={4}>
                        <Box bg="white" borderRadius="lg">
                            <Box m={8} color="#0B0E3F">
                                <VStack spacing={5}>
                                    <FormControl id="name">
                                        <FormLabel>Your Name</FormLabel>
                                        <InputGroup borderColor="#E0E1E7">
                                            <InputLeftElement pointerEvents="none" />
                                            <Input type="text" size="md" />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl id="name">
                                        <FormLabel>Mail</FormLabel>
                                        <InputGroup borderColor="#E0E1E7">
                                            <InputLeftElement pointerEvents="none" />
                                            <Input type="text" size="md" />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl id="name">
                                        <FormLabel>Message</FormLabel>
                                        <Textarea
                                            borderColor="gray.300"
                                            _hover={{
                                                borderRadius: "gray.300",
                                            }}
                                            placeholder="message"
                                        />
                                    </FormControl>

                                    <FormControl id="name" float="right">
                                        <Button
                                            variant="solid"
                                            bg="#0D74FF"
                                            color="white"
                                            _hover={{}}
                                        >
                                            Send Message
                                        </Button>
                                    </FormControl>
                                </VStack>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}
