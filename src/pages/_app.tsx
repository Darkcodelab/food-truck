import "@fontsource/open-sans";
import "@fontsource/open-sans/800.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/poppins";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
