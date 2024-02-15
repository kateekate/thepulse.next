import StyledComponentsRegistry from "@/lib/registry";
import { ChakraProvider } from "@/providers/chakra-provider";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StyledComponentsRegistry>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </StyledComponentsRegistry>
  );
};

export default App;
