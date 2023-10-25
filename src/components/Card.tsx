import { Center, Input, Box } from "@chakra-ui/react";
import { welcome } from "../services/welcome";
import { CustomButton } from "./CustomButton";

export const Card = () => {
  return (
    <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
        <CustomButton onClick={welcome} text="Login" />
      </Center>
    </Box>
  );
};
