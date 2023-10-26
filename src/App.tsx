import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./contexts/AppContext";
import { getAllLocalStorage, createLocalStorage } from "./services/storage";
import MainRoutes from "./routes/routes";

function App() {
  !getAllLocalStorage() && createLocalStorage();

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
