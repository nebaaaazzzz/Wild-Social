import { ChakraBaseProvider, extendTheme, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Tab from "./components/Tab";
const theme = extendTheme({
  config: {
    initialColorMode: "light", // “dark” | “system”
    useSystemColorMode: false,
  },
});

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Header />
      <Box bg={"gray.100"} mt="1">
        <Tab />
      </Box>
    </ChakraBaseProvider>
  );
}

export default App;
