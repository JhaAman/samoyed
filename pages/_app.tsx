import "../styles/globals.css";
import type { AppProps } from "next/app";
import UserProvider from "../utils/user";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Nav />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
