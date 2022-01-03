import React, { ReactElement } from "react";
import { motion } from "framer-motion";

interface Props {}

export default function QuestionPanel({}: Props): ReactElement {
  return (
    <div className="grid w-2/5 grid-cols-1 m-4 bg-base">
      <div className="mx-5 my-5">
        {/* Question Type Card */}
        <div className="px-3 py-2 rounded-lg bg-surface">
          <h1 className="text-xl">Question Type</h1>
          <h2>Dropdown</h2>
          <MyComponent />
        </div>
      </div>
    </div>
  );
}

export const MyComponent = () => (
  <motion.div animate={{ scale: 2 }} transition={{ duration: 0.5 }} />
);
