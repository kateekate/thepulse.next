import { theme } from "@/styles/theme";
import { ChakraProvider as _ChakraProvider } from "@chakra-ui/react";

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return <_ChakraProvider theme={theme}>{children}</_ChakraProvider>;
}
