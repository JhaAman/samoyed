import React, { ReactElement } from "react";
import QuestionType from "./QuestionType";
import * as Separator from "@radix-ui/react-separator";
import ExplainConcept from "./ExplainConcept";
import Button from "../../ui/Button";
import { motion, AnimateSharedLayout } from "framer-motion";

interface Props {}

export default function QuestionPanel({}: Props): ReactElement {
  return (
    <div className="w-1/3 px-5 py-5 m-4 bg-base">
      {/* Question Type Card */}
      <div className="flex flex-col items-center justify-center rounded-lg h-1/6 bg-surface">
        {/* <h1 className="mb-4 text-xl">Question Type</h1> */}
        {/* <QuestionType changeState={setQuestionType} /> */}
      </div>

      {/* <Separator.Root className="my-5 w-full bg-gray-500 h-0.5 opacity-30" /> */}

      {/* {questionType === QuestionTypeState.ExplainConcept && (
        <div className="overflow-y-scroll h-2/3">
          {Array.from(Array(100)).map((_, index) => (
            <ExplainConcept key={index} />
          ))}
        </div>
      )} */}

      {/* <Separator.Root className="my-5 w-full bg-gray-500 h-0.5 opacity-30" /> */}

      <div className="h-1/6">Footer</div>
    </div>
  );
}
