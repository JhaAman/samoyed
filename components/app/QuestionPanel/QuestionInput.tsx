import { Input } from "@supabase/ui";

import React, { ReactElement } from "react";

interface Props {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
}

export default function QuestionInput({
  question,
  setQuestion,
}: Props): ReactElement {
  return (
    <Input.TextArea
      label="Your Question"
      rows={8}
      value={question}
      onChange={(e) => {
        setQuestion(e.target.value);
      }}
      // type="text"
      labelOptional=""
    />
  );
}
