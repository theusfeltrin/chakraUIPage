import { Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: any) => {
  return (
    <Flex flexDirection="column" height="100vh" width="100vw">
      <Header title="Dio Bank" />
      <Flex width="full" height="full">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
