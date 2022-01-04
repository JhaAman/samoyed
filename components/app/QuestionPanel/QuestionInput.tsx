import { Input } from "@supabase/ui";

import React, { ReactElement } from "react";

interface Props {}

export default function QuestionInput({}: Props): ReactElement {
  return (
    <Input.TextArea
      label="Your Question"
      limit={500}
      rows={8}
      // type="text"
      labelOptional=""
    />
  );
}
