import { Flex, Text } from "@chakra-ui/react";
import { UserData } from "../types/userData";

interface ICardInfo {
  userData: UserData;
  actualDate: string;
}
const translateKey: Record<string, string> = {
  email: "Email",
  name: "Nome",
  balance: "Saldo",
  id: "Codigo",
};

const allowedKeys = ["email", "name", "balance", "id"];

const CardInfo = ({ userData, actualDate }: ICardInfo) => {
  const listKeys = Object.keys(userData).filter((key) =>
    allowedKeys.includes(key)
  );
  return (
    <Flex
      backgroundColor="#FFFFFF"
      borderRadius="25px"
      padding="25px"
      width="50%"
      height="50%"
      flexDirection="column"
    >
      <Text fontSize="2xl" fontWeight="bold">
        {`Bem vindo(a), ${userData.name}`}
      </Text>
      {listKeys.map((key, index) => {
        return (
          <Flex
            key={`info${index}`}
            width="100%"
            marginTop={index === 0 ? "40px" : "20px"}
          >
            <Text
              fontWeight="bold"
              marginRight="15px"
            >{`${translateKey[key]}:`}</Text>
            <Text>{userData[key as keyof UserData]}</Text>
          </Flex>
        );
      })}
      <Flex justifyContent="flex-end" width="100%" key={`actualDate`}>
        <Text>{actualDate}</Text>
      </Flex>
    </Flex>
  );
};

export default CardInfo;
