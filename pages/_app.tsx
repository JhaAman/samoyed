import "../styles/globals.css";
import type { AppProps } from "next/app";
import UserProvider from "../utils/user";
import Nav from "../components/Nav";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;
