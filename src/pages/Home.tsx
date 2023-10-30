import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AppContext);

  userData && navigate("/conta");

  return <LoginForm />;
};

export default Home;
