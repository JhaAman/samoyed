import type { AppProps } from "next/app";
import UserProvider from "../utils/user";
import { ThemeProvider } from "next-themes";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import "../styles/globals.css";

/*
The `getLayout` prop is a function that takes a React component as an argument and returns a React
component.
*/
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

/*
We create a context for the user, and then we create a context for the theme. We then render the
component with the context for the user and the context for the theme.
*/
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
