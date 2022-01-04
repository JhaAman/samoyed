import React, { ReactElement } from "react";
import QuestionType from "./QuestionType";
import * as Separator from "@radix-ui/react-separator";
import ExplainConcept from "./ExplainConcept";
import Button from "../../ui/Button";

interface Props {}

export enum QuestionTypeState {
  ExplainConcept,
  FixError,
  HowTo,
  GenExample,
}

export default function QuestionPanel({}: Props): ReactElement {
  const [questionType, setQuestionType] = React.useState<QuestionTypeState>(
    QuestionTypeState.ExplainConcept
  );

  return (
    <div className="w-1/2 px-5 py-5 m-4 bg-base">
      {/* Question Type Card */}
      <div className="flex flex-col items-center justify-center px-5 py-5 rounded-lg bg-surface">
        <h1 className="mb-4 text-xl">Question Type</h1>
        <QuestionType changeState={setQuestionType} />
      </div>

      <Separator.Root className="my-5  w-full bg-gray-500 h-0.5 opacity-30" />

      {questionType === QuestionTypeState.ExplainConcept && (
        <div className="overflow-y-scroll h-2/3">
          {/* Map a div 10 times */}
          {Array.from(Array(100)).map((_, index) => (
            <div key={index}>Aman Jha</div>
          ))}
        </div>
      )}
      <div className="">Footer</div>
    </div>
  );
}
