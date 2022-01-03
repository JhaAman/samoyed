import React, { ReactElement } from "react";
import QuestionType from "./QuestionType";

interface Props {}

export default function QuestionPanel({}: Props): ReactElement {
  return (
    <div className="grid w-2/5 grid-cols-1 m-4 bg-base">
      <div className="mx-5 my-5">
        {/* Question Type Card */}
        <div className="px-5 py-5 rounded-lg bg-surface">
          <h1 className="mb-2 text-xl">Question Type</h1>

          <QuestionType />
        </div>
      </div>
    </div>
  );
}
