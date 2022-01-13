import React, { ReactElement } from "react";

interface Props {
  handleForward: () => void;
  handleBack: () => void;
}

export default function Demo({
  handleForward,
  handleBack,
}: Props): ReactElement {
  return <div></div>;
}
