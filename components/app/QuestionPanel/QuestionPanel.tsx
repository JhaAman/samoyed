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
    <div className="grid flex-1 w-1/2 grid-cols-1 m-4 bg-base">
      <div className="mx-5 my-5">
        {/* Question Type Card */}
        <div className="flex flex-col items-center justify-center px-5 py-5 rounded-lg bg-surface">
          <h1 className="mb-4 text-xl">Question Type</h1>
          <QuestionType changeState={setQuestionType} />
        </div>

        <Separator.Root className="w-full my-8 bg-gray-500 h-0.5 opacity-30" />

        <div className="overflow-y-scroll h-1/4">
          {/* Depending on state of questionType, return a div with the type in it */}
          {questionType === QuestionTypeState.ExplainConcept && (
            // <ExplainConcept />
            <div>Aman Jha</div>
          )}

          <Separator.Root className="w-full my-8 bg-gray-500 h-0.5 opacity-30" />

          <Button />
        </div>
      </div>
    </div>
  );
}
