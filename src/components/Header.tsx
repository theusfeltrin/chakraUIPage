import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { changeLocalStorage } from "../services/storage";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Flex width="full" justifyContent="space-between" padding="15px">
      <h3>{title}</h3>
      {isLoggedIn && <Button onClick={logout}>Logout</Button>}
    </Flex>
  );
};
