import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: "#E23744",
  accent: "#0E2368",
};

const fonts = {
  heading: `'Open Sans', serif`,
  body: `'Poppins', sans-serif`,
};

const theme = extendTheme({ colors, fonts });

export default theme;
