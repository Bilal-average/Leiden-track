import { StrictMode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import MainPage from "./page";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  </StrictMode>
);
