import React, { ReactElement } from "react";
import QuestionType from "./QuestionType";
import * as Separator from "@radix-ui/react-separator";

interface Props {}

export enum QuestionTypeState {
  ExplainConcept,
  FixError,
  GenExample,
  HowTo,
}

export default function QuestionPanel({}: Props): ReactElement {
  const [questionType, setQuestionType] = React.useState<QuestionTypeState>(
    QuestionTypeState.ExplainConcept
  );

  return (
    <div className="grid w-2/5 grid-cols-1 m-4 bg-base">
      <div className="mx-5 my-5">
        {/* Question Type Card */}
        <div className="px-5 py-5 rounded-lg bg-surface">
          <h1 className="mb-4 text-xl">Question Type</h1>
          <QuestionType state={questionType} />
        </div>

        <Separator.Root className="w-40 my-16 bg-gray-500 h-0.5 opacity-30" />

        {/* Depending on state of questionType, return a div with the type in it */}
        {questionType === QuestionTypeState.ExplainConcept && (
          <div className="px-5 py-5 rounded-lg bg-surface">
            <h1 className="mb-4 text-xl">Explain Concept</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, quisquam.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
