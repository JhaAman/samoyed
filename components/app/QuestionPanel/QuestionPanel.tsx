import React, { ReactElement } from "react";
import * as Separator from "@radix-ui/react-separator";
import Button from "../../ui/Button";
import { motion, AnimateSharedLayout } from "framer-motion";
import Slider from "./Slider";

interface Props {}

export default function QuestionPanel({}: Props): ReactElement {
  return (
    <div className="m-10 rounded h-1/2 bg-surface">
      <div className="w-1/3 px-5 py-5 m-4">
        <h1 className="text-2xl">Question</h1>
      </div>
      <Slider />
    </div>
  );
}
