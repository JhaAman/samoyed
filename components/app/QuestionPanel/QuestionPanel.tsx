import React, { ReactElement } from "react";
import * as Separator from "@radix-ui/react-separator";
import Button from "../../ui/Button";
import { motion, AnimateSharedLayout } from "framer-motion";
import Slider from "./Slider";
import Tags from "./Tags";

interface Props {}

export default function QuestionPanel({}: Props): ReactElement {
  return (
    // Card bg
    <div className="m-10 rounded h-1/2 bg-surface">
      <div className="flex m-5">
        {/* Left */}
        <div className="flex flex-col justify-between h-full">
          <h1 className="text-lg">Question</h1>

          {/* Explain variable */}
          <div className="flex flex-col justify-between mt-8 ">
            <h1 className="mb-2 text-sm">What would you like more of?</h1>
            <div>
              <Slider />
              <div className="flex justify-between">
                <h3 className="text-xs">Explain</h3>
                <h3 className="text-xs">Code</h3>
              </div>
            </div>
          </div>

          {/* Tags */}
          {/* <div className="max-w-10">
            <Tags />
          </div> */}
        </div>

        {/* Right */}
      </div>
    </div>
  );
}
