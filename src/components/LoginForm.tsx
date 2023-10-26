import { Center, Input, Box, Flex } from "@chakra-ui/react";
import { CustomButton } from "./CustomButton";
import { login } from "../services/login";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { changeLocalStorage } from "../services/storage";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async () => {
    const loggedIn = await login(email);

    if (!loggedIn) {
      return alert("Email inválido");
    }

    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate("/conta/1");
  };

  return (
    <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Flex flexDirection="column" width="full">
        <Input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          marginTop="15px"
        />
        <Input placeholder="password" marginTop="15px" />
      </Flex>
      <Center>
        <CustomButton onClick={() => validateUser()} text="Login" />
      </Center>
    </Box>
  );
};
