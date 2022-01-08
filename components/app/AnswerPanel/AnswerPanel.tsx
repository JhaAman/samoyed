import React, { ReactElement } from "react";
import * as Separator from "@radix-ui/react-separator";
import Button from "../../ui/Button";
import { motion, AnimateSharedLayout } from "framer-motion";
import Clarify from "./Clarify";

interface Props {
  answer: { type?: string; content?: string };
}

export default function AnswerPanel({ answer }: Props): ReactElement {
  return (
    // Card bg
    <div className="flex-1 mx-10 mb-10 overflow-y-auto rounded bg-surface">
      <div className="flex justify-between h-full py-8 mx-16 whitespace-pre-wrap">
        {/* Left */}
        <div className="flex flex-col w-1/2 h-full ">
          <div className="flex-grow p-4 rounded bg-overlay-dark">
            <div className="flex flex-col ">
              <div>{answer.content}</div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col flex-1 p-4 ml-8 rounded bg-overlay-dark">
          <Clarify />
        </div>
      </div>
    </div>
  );
}
