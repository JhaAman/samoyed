/* 
  pages/welcome.tsx
  ------------------------
  The page where people can fill out the Typeform
 */

import React, { ReactElement } from "react";
import { Widget } from "@typeform/embed-react";
import HomepageLayout from "../layout/HomepageLayout";
import Meta from "../layout/Meta";

interface Props {}

export default function RequestAccess({}: Props): ReactElement {
  return (
    <>
      <Widget id="n2dprafs" style={{ width: "100%" }} className="h-screen" />
    </>
  );
}

// Attach the landing layout (and other nested layouts) to the page
RequestAccess.getLayout = (page: ReactElement) => {
  return (
    // Attach the Landing layout with a meta component, decide on header/footer
    <HomepageLayout
      meta={
        <Meta
          title="Sign up for Rosie's waitlist"
          description="An AI that answers coding questions"
        />
      }
      headerActive={false}
      footerActive={false}
    >
      {page}
    </HomepageLayout>
  );
};
