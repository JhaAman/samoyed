/* 
  pages/_components/landing/Footer.tsx
  ------------------------
  Footer for the landing pages. Not really used yet.
 */

import React, { ReactElement } from "react";
import { useRouter } from "next/router";

interface Props {}

export default function Footer({}: Props): ReactElement {
  const router = useRouter();

  return (
    <footer>
      {/* Footer (sign in) */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center mb-16 text-xs opacity-50 ">
        <button
          // className="animate-[moveUpDown_3s_ease-in-out_infinite]"
          className="p-2 rounded-full text-gray-50 bg-overlay-dark hover:bg-overlay-light hover:text-white focus:outline-none"
          onClick={() => router.push("/login")}
        >
          Press S to sign in
        </button>
      </div>
    </footer>
  );
}
