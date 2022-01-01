/* 
  layout/LandingLayout.tsx
  ------------------------
  This layout component wraps around all the root pages (in pages/).
  It has an header and footer component, and each page decides on whether it displays that header or footer.
  The meta component is for the favicons and SEO. Each page will create a new Meta component and pass
  it to this layout, then this layout will add it to the page.
 */

import React, { ReactElement, ReactNode } from "react";
import {
  ActionId,
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
  KBarResults,
  createAction,
  useMatches,
  ActionImpl,
} from "kbar";
import Footer from "../components/homepage/Footer";
import Header from "../components/homepage/Header";
import { useRouter } from "next/router";
import CommandBar, { HomeIcon } from "../components/homepage/commandbar";

// TODO: add fathom client, etc.

type HomepageProps = {
  // Accept a Meta component (components/landing/Meta.tsx) from each page.
  meta: ReactNode;
  // The actual page itself. Must be named 'children'.
  children: ReactNode;
  // Booleans for whether to display the header or footer.
  headerActive: boolean;
  footerActive: boolean;
};

export default function HomepageLayout({
  meta,
  children,
  headerActive,
  footerActive,
}: HomepageProps): ReactElement {
  /*
      Meta component is passed in from the page
      Children is the page itself (react keyword)
      headerActive and footerActive are bools decided by the page
    */
  const router = useRouter();

  const initialActions = [
    {
      id: "homeAction",
      name: "Home",
      shortcut: ["h"],
      keywords: "back",
      section: "Navigation",
      perform: () => router.push("/"),
      icon: <HomeIcon />,
      subtitle: "Subtitles can help add more context.",
    },
    {
      id: "docsAction",
      name: "Docs",
      shortcut: ["g", "d"],
      keywords: "help",
      section: "Navigation",
      perform: () => router.push("/docs"),
    },
    {
      id: "contactAction",
      name: "Contact",
      shortcut: ["c"],
      keywords: "email hello",
      section: "Navigation",
      perform: () => window.open("mailto:timchang@hey.com", "_blank"),
    },
    {
      id: "twitterAction",
      name: "Twitter",
      shortcut: ["t"],
      keywords: "social contact dm",
      section: "Navigation",
      perform: () => window.open("https://twitter.com/timcchang", "_blank"),
    },
    createAction({
      name: "Github",
      shortcut: ["g", "h"],
      keywords: "sourcecode",
      section: "Navigation",
      perform: () => window.open("https://github.com/timc1/kbar", "_blank"),
    }),
  ];

  return (
    <>
      <KBarProvider
        options={{
          enableHistory: true,
        }}
        actions={initialActions}
      >
        <CommandBar />
        {meta}
        {headerActive && <Header />}
        <main className="text-black dark:text-white">{children}</main>
        {footerActive && <Footer />}
      </KBarProvider>
    </>
  );
}
