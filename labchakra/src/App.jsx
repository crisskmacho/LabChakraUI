import React from "react";
import Header from './components/Header'
import { ChakraProvider } from "@chakra-ui/react";
import Cards from "./components/Cards";

function App() {


  return (
    <ChakraProvider>

          <Header />
          <Cards/>

    </ChakraProvider>
  )
}

export default App
