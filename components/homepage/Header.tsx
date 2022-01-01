/* 
  pages/_components/landing/Header.tsx
  ------------------------
  Header for the landing pages. Not really used yet.
 */

import { useKBar } from "kbar";
import Link from "next/link";
import React, { ReactElement } from "react";
import { BrowserView } from "react-device-detect";
import { CommandIcon } from "../icons";

interface Props {}

export default function Header({}: Props): ReactElement {
  const { query } = useKBar();
  return (
    <header>
      {/* Header (command key) */}
      <BrowserView>
        <div className="absolute top-0 flex w-full animate-[fadeIn_0.5s_linear]">
          {/* Rosie Logo */}
          <button
            onClick={query.toggle}
            className="flex items-center justify-center w-12 h-12 p-2 m-10 mr-auto border-2 border-white hover:opacity-40 opacity-20 rounded-xl"
          >
            <CommandIcon />
          </button>

          {/* Command Button */}
          <button
            onClick={query.toggle}
            className="flex items-center justify-center w-12 h-12 p-2 m-10 ml-auto border-2 border-white hover:opacity-40 opacity-20 rounded-xl"
          >
            <CommandIcon />
          </button>
        </div>
      </BrowserView>
    </header>
  );
}
