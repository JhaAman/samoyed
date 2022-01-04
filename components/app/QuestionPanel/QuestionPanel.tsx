import React, { ReactElement } from "react";
import * as Separator from "@radix-ui/react-separator";
import Button from "../../ui/Button";
import { motion, AnimateSharedLayout } from "framer-motion";
import Slider from "./Slider";
import Tags from "./Tags";
import QuestionInput from "./QuestionInput";

interface Props {}

export default function QuestionPanel({}: Props): ReactElement {
  return (
    // Card bg
    <div className="m-10 overflow-y-auto rounded h-fit bg-surface">
      <div className="flex m-5">
        {/* Left */}
        <div className="flex flex-col h-full">
          <h1 className="text-lg">Question</h1>

          {/* Explain variable */}
          <div className="flex flex-col mt-8 ">
            <h1 className="mb-2 text-sm">What would you like more of?</h1>
            <div>
              <Slider />
              <div className="flex justify-between">
                <h3 className="text-xs">Explanation</h3>
                <h3 className="text-xs">Code Snippet</h3>
              </div>
            </div>
          </div>

          {/* Tags */}
          {/* <div className="max-w-10">
            <Tags />
          </div> */}

          {/* Submit */}
          <div className="flex justify-center mt-8">
            <Button
              className="w-full"
              onClick={() => {}}
              disabled={false}
              variant="slim"
            >
              Submit
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="mx-10">
          <QuestionInput />
        </div>
      </div>
    </div>
  );
}
