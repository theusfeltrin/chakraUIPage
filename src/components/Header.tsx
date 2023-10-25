import { Flex } from "@chakra-ui/react";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <Flex width="full" justifyContent="flex-start" padding="15px">
      <h3>{title}</h3>
    </Flex>
  );
};
