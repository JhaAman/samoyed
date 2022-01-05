import React, { ReactElement } from "react";
import Button from "../../ui/Button";
import Slider from "./Slider";
import QuestionInput from "./QuestionInput";

interface Props {}

export default function QuestionPanel({}: Props): ReactElement {
  return (
    // Card bg
    <div className="mx-10 mt-10 overflow-y-auto rounded h-96 bg-surface">
      <div className="flex flex-row justify-between mx-16 my-8">
        {/* Left */}
        <div className="flex flex-col mr-40 w-80">
          <h1 className="text-lg">Question</h1>

          {/* Explain variable */}
          <div className="flex flex-col mt-8 ">
            <h1 className="mb-2 text-sm">Answer Style - what </h1>
            <div>
              <Slider />
              <div className="flex justify-between">
                <h3 className="text-xs">Explanation</h3>
                <h3 className="text-xs">Code Snippet</h3>
              </div>
            </div>
          </div>

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
        <div className="w-1/2 ">
          <QuestionInput />
        </div>
      </div>
    </div>
  );
}
