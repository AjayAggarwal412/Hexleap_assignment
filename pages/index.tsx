import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import Custom from "./card";
import theme from "../styles/theme";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Custom></Custom>
    </ChakraProvider>
  );
}
