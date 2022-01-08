import React, { ReactElement } from "react";
import Chatbot from "react-chatbot-kit";
import { Input } from "@supabase/ui";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

interface Props {}

export default function Clarify({}: Props): ReactElement {
  return (
    <div className="relative flex flex-col justify-between h-full">
      <div className="flex-1 w-full overflow-y-scroll">
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
        <p>Ask a clarifying question</p>
      </div>
      <div className="flex w-full mt-5 h-fit">
        <Input className="w-full" placeholder="Type here"></Input>
        <span className="flex items-center px-2 pointer-events-none ">
          <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}
