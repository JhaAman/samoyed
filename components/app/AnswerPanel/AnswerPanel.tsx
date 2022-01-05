import React, { ReactElement } from "react";
import * as Separator from "@radix-ui/react-separator";
import Button from "../../ui/Button";
import { motion, AnimateSharedLayout } from "framer-motion";

interface Props {}

export default function AnswerPanel({}: Props): ReactElement {
  return (
    // Card bg
    <div className="mx-10 mb-10 overflow-y-auto rounded h-fit bg-surface">
      <div className="flex justify-between mx-16 my-8 whitespace-pre-wrap">
        {/* Left */}
        <div className="flex flex-col h-full p-4 rounded bg-overlay-dark">
          <div className="flex flex-col ">
            <div>{`Waiting for a question...`}</div>
          </div>
        </div>

        {/* Right */}
        {/* <div className="flex flex-col h-full p-4 ml-8 rounded bg-overlay-dark">
          <div className="flex flex-col ">
            <div>
              Clarifying questions chat is currently disabled. Check back later!
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
