import { Flex, Center, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import CardInfo from "../components/CardInfo";

const Conta = () => {
  const navigate = useNavigate();

  const { isLoggedIn, userData } = useContext(AppContext);

  !isLoggedIn && navigate("/");

  const actualData = new Date();
  const dataString = `${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`;

  return (
    <Flex width="full" height="full">
      {userData === null ? (
        <Center width="full" height="full">
          <Spinner size="xl" color="white" />
        </Center>
      ) : (
        <Center width="full" height="full">
          <CardInfo userData={userData} actualDate={dataString} />
        </Center>
      )}
    </Flex>
  );
};

export default Conta;
