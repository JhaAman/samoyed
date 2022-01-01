/* 
  pages/_components/landing/Footer.tsx
  ------------------------
  Footer for the landing pages. Not really used yet.
 */

import React, { ReactElement } from "react";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <footer>
      {/* Footer (sign in) */}
      <div className="absolute bottom-0 left-0 right-0 opacity-50 text-xs flex flex-col items-center justify-center mb-16 animate-[moveUpDown_3s_ease-in-out_infinite]">
        <button>Press S to sign in</button>
      </div>
    </footer>
  );
}
