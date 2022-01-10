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
import {
  ClockIcon,
  EmailIcon,
  HomeIcon,
  LinkedInIcon,
  ListIcon,
  SignInIcon,
  ThemeIcon,
  TwitterIcon,
} from "../components/icons";
import CommandBar from "../components/homepage/commandbar";

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

  const actions = [
    /* Action */
    {
      id: "preorder",
      name: "Preorder",
      shortcut: ["p"],
      keywords: "preorder buy get signup",
      section: "Action",
      perform: () => router.push("/preorder"),
      icon: <ClockIcon />,
      subtitle: "Limited: preorder lifetime access now",
    },
    {
      id: "waitlist",
      name: "Join Waitlist",
      shortcut: ["w"],
      keywords: "waitlist get signup",
      section: "Action",
      perform: () => router.push("/welcome"),
      icon: <ListIcon />,
      // subtitle: "",
    },
    {
      id: "signin",
      name: "Sign In",
      shortcut: ["s"],
      keywords: "signup login signin",
      section: "Action",
      perform: () => router.push("/login"),
      icon: <SignInIcon />,
      // subtitle: "",
    },
    /* Navigation */
    // {
    //   id: "home",
    //   name: "Home",
    //   // shortcut: ["h"],
    //   keywords: "home back go",
    //   section: "Navigation",
    //   perform: () => router.push("/"),
    //   icon: <HomeIcon />,
    //   // subtitle: "",
    // },
    // {
    //   id: "method",
    //   name: "Method",
    //   // shortcut: ["m"],
    //   keywords: "method about rosie",
    //   section: "Naviagtion",
    //   perform: () => router.push("/method"),
    //   icon: <HomeIcon />,
    //   subtitle: "See how Rosie works",
    // },
    // {
    //   id: "jobs",
    //   name: "Jobs",
    //   // shortcut: ["m"],
    //   keywords: "method about rosie",
    //   section: "Navigation",
    //   perform: () => router.push("/jobs"),
    //   icon: <HomeIcon />,
    //   subtitle: "We're hiring!",
    // },
    // General
    // TODO: use the example useThemeActions to implement theme switching
    // {
    //   id: "theme",
    //   name: "Change Theme",
    //   // shortcut: ["m"],
    //   keywords: "theme dark light",
    //   section: "General",
    //   // perform: () => router.push("/jobs"),
    //   icon: <ThemeIcon />,
    //   subtitle: "Don't like dark mode?",
    // },
    {
      id: "contact",
      name: "Get in Contact",
      // shortcut: ["m"],
      keywords: "contact email hello",
      section: "General",
      perform: () => window.open("mailto:aman@rosieos.com", "_blank"),
      icon: <EmailIcon />,
      subtitle: "Talk to us!",
    },
    // Social
    {
      id: "twitter",
      name: "Twitter",
      // shortcut: ["m"],
      keywords: "twitter tweet social dm",
      section: "Social",
      perform: () => window.open("https://twitter.com/Rosie_HQ", "_blank"),
      icon: <TwitterIcon />,
      // subtitle: "",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      // shortcut: ["m"],
      keywords: "linkedin social job",
      section: "Social",
      perform: () =>
        window.open("https://www.linkedin.com/company/rosieos/", "_blank"),
      icon: <LinkedInIcon />,
      // subtitle: "Don't like dark mode?",
    },
  ];

  return (
    <>
      <KBarProvider
        options={{
          enableHistory: true,
        }}
        // actions={actions}
      >
        {/* <CommandBar /> */}
        {meta}
        {headerActive && <Header />}
        <main className="text-black dark:text-white">{children}</main>
        {footerActive && <Footer />}
      </KBarProvider>
    </>
  );
}
