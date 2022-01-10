import React, { ReactElement, useState } from "react";
import Chatbot from "react-chatbot-kit";
import { Input } from "@supabase/ui";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

interface Props {
  clarifyingPrompt: string;
}

export default function Clarify({ clarifyingPrompt }: Props): ReactElement {
  const [clarifyingQuestion, setClarifyingQuestion] = useState("");
  const [clarifyingAnswer, setClarifyingAnswer] = useState(
    "If you have any clarifying questions, feel free to ask below!"
  );

  const handleSubmitClarifyingQuestion = async () => {
    setClarifyingAnswer(clarifyingQuestion);
  };

  return (
    <div className="relative flex flex-col justify-between h-full">
      <div className="flex-1 w-full p-2 overflow-y-scroll rounded bg-overlay-light">
        <p>{clarifyingAnswer}</p>
      </div>
      <div className="flex w-full mt-5 h-fit">
        <Input
          className="w-full"
          placeholder="Type here"
          value={clarifyingQuestion}
          onChange={(e) => {
            setClarifyingQuestion(e.target.value);
          }}
        ></Input>
        <button
          className="flex items-center px-2 "
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitClarifyingQuestion();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
