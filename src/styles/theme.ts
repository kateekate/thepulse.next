import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    background: "black",
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Roboto, sans-serif",
  },
  styles: {
    global: {
      body: {
        fontFamily: "body",
        bg: "background",
      },
    },
  },
});
