import { Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: any) => {
  return (
    <Flex flexDirection="column" height="100vh" width="100vw">
      <Header title="Chakra Page" />
      <Flex
        width="100vw"
        height="100vh"
        backgroundColor="#9413dc"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
