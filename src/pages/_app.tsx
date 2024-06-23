import type { AppProps } from "next/app";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import useTheme from "@/hooks/useTheme";

export default function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
