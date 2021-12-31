import "../styles/globals.css";
import type { AppProps } from "next/app";
import UserProvider from "../utils/user";
import { ThemeProvider } from "next-themes";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <UserProvider>
      <ThemeProvider>
        {getLayout(<Component {...pageProps} />)}
        {/* <Component {...pageProps} /> */}
      </ThemeProvider>
    </UserProvider>
  );
};

export default MyApp;
