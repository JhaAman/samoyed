import React, { ReactElement } from "react";

interface Props {}

export default function ExplainConcept({}: Props): ReactElement {
  return (
    <div className="px-5 py-5 rounded-lg bg-surface">
      <h1 className="mb-4 text-xl">Explain Concept</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        quisquam.
      </p>
    </div>
  );
}
