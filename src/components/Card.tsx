import { Center, Input, Box, Flex } from "@chakra-ui/react";
import { welcome } from "../services/welcome";
import { CustomButton } from "./CustomButton";

export const Card = () => {
  return (
    <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Flex flexDirection="column" width="full">
        <Input placeholder="email" marginTop="15px" />
        <Input placeholder="password" marginTop="15px" />
      </Flex>
      <Center>
        <CustomButton onClick={welcome} text="Login" />
      </Center>
    </Box>
  );
};
