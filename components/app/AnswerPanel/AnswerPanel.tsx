import React, { ReactElement } from "react";
import * as Separator from "@radix-ui/react-separator";
import Button from "../../ui/Button";
import { motion, AnimateSharedLayout } from "framer-motion";

interface Props {}

export default function AnswerPanel({}: Props): ReactElement {
  return (
    // Card bg
    <div className="m-10 overflow-y-auto rounded h-fit bg-surface">
      <h1 className="m-5 text-lg">Answer</h1>
      <div className="flex m-5">
        {/* Left */}
        <div className="flex flex-col h-full">
          <div className="flex flex-col mt-8 ">
            <div>
              {`I don't know what is wrong with my code.
It just freezes without any errors or warnings.

private void launchFolderDialog_Click(object sender, EventArgs e)
{
    if (saveFolderDialog.ShowDialog() == DialogResult.OK)
    {
        viewSaveFolder.Text = saveFolderDialog.SelectedPath;
        saveFolder = saveFolderDialog.SelectedPath;
    }
}`}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col h-full">
          <div className="flex flex-col mt-8 ">
            <div>
              {`I don't know what is wrong with my code.
It just freezes without any errors or warnings.

private void launchFolderDialog_Click(object sender, EventArgs e)
{
    if (saveFolderDialog.ShowDialog() == DialogResult.OK)
    {
        viewSaveFolder.Text = saveFolderDialog.SelectedPath;
        saveFolder = saveFolderDialog.SelectedPath;
    }
}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
