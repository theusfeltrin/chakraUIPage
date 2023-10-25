import { ChakraProvider, Box } from "@chakra-ui/react";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box
          height="full"
          width="full"
          backgroundColor="#9413dc"
          padding="25px"
        >
          <Card />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
