import React, { ReactElement } from "react";
import * as Separator from "@radix-ui/react-separator";
import Button from "../../ui/Button";
import { motion, AnimateSharedLayout } from "framer-motion";

interface Props {}

export default function AnswerPanel({}: Props): ReactElement {
  return (
    // Card bg
    <div className="mx-10 mb-10 overflow-y-auto rounded h-fit bg-surface">
      <h1 className="mx-5 mt-5 mb-2 text-lg">Answer</h1>
      <div className="flex mx-5 mt-8 mb-5 whitespace-pre-wrap">
        {/* Left */}
        <div className="flex flex-col h-full p-4 rounded bg-overlay-dark">
          <div className="flex flex-col ">
            <div>
              {`I don't know what is wrong with my code.
It just freezes without any errors or warnings.

\`\`\`
private void launchFolderDialog_Click(object sender, EventArgs e)
{
    if (saveFolderDialog.ShowDialog() == DialogResult.OK)
    {
        viewSaveFolder.Text = saveFolderDialog.SelectedPath;
        saveFolder = saveFolderDialog.SelectedPath;
    }
}
\`\`\``}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col h-full p-4 ml-8 rounded bg-overlay-dark">
          <div className="flex flex-col ">
            <div>
              Clarifying questions chat is currently disabled. Check back later!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
