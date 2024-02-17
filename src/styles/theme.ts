import { extendTheme } from "@chakra-ui/react";
import { gantari } from "./fonts";

export const theme = extendTheme({
  colors: {
    background: "black",
  },
  fonts: {
    body: gantari.style.fontFamily,
    heading: gantari.style.fontFamily,
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
