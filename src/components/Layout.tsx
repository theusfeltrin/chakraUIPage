import { Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header title="Dio Bank" />
      <Flex width="full" height="max">
        {children}
      </Flex>
      <Footer />
    </>
  );
};
