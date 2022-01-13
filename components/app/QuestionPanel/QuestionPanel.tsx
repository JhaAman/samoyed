import React, { FormEvent, ReactElement, useEffect, useState } from "react";
import Button from "../../ui/Button";
import Slider from "./Slider";
import QuestionInput from "./QuestionInput";

interface Props {
  handleSubmitQuestion: (
    e: FormEvent<HTMLFormElement>,
    question: string,
    answer: string
  ) => Promise<void>;
  loading: boolean;
}

export default function QuestionPanel({
  handleSubmitQuestion,
  loading,
}: Props): ReactElement {
  const [question, setQuestion] = useState("");
  const [answerTypeValue, setAnswerTypeValue] = useState(50);
  const [answerTypeContent, setAnswerTypeContent] = useState("Normal");

  useEffect(() => {
    if (answerTypeValue < 50) {
      setAnswerTypeContent("Explain");
    } else if (answerTypeValue === 50) {
      setAnswerTypeContent("Normal");
    } else {
      setAnswerTypeContent("Code");
    }
  }, [answerTypeValue]);

  return (
    // Card bg
    <div className="mx-10 mt-10 overflow-y-auto rounded h-80 bg-surface">
      <div className="flex flex-row justify-between mx-16 my-8">
        {/* Left */}
        <div className="flex flex-col mr-40 w-80">
          <h1 className="text-lg">Question</h1>

          {/* Explain variable */}
          <div className="flex flex-col mt-8 ">
            <h1 className="mb-2 text-sm">What do you want to see more of?</h1>
            <div>
              <Slider onChangeValue={setAnswerTypeValue} />
              <div className="flex justify-between">
                <h3 className="text-xs">Explanations</h3>
                <h3 className="text-xs">Code Snippets</h3>
              </div>
            </div>
          </div>

          {/* Submit */}
          <form
            className="flex justify-center mt-8"
            onSubmit={(e) => {
              handleSubmitQuestion(e, question, answerTypeContent);
            }}
          >
            <Button
              className="w-full"
              variant="slim"
              type="submit"
              loading={loading}
              disabled={!question.length}
            >
              Submit
            </Button>
          </form>
        </div>

        {/* Right */}
        <div className="w-1/2 ">
          <QuestionInput question={question} setQuestion={setQuestion} />
        </div>
      </div>
    </div>
  );
}
