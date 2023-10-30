import { Center, Input, Box, Flex, Text } from "@chakra-ui/react";
import { CustomButton } from "./CustomButton";
import { login } from "../services/login";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async () => {
    const loggedIn = await login({ email, password });

    if (!loggedIn) {
      return alert("Email inválido");
    }

    setIsLoggedIn(true);
    navigate("/conta");
  };

  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="25px"
      padding="25px 20px"
      width="50%"
      height="50%"
    >
      <Center>
        <Text fontSize="3xl">Faça o login</Text>
      </Center>
      <Flex flexDirection="column" width="full">
        <Input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          marginTop="25px"
        />
        <Input
          placeholder="password"
          marginTop="25px"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <CustomButton onClick={() => validateUser()} text="Login" />
      </Flex>
    </Box>
  );
};
