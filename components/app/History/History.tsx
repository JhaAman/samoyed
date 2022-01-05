import React, { ReactElement } from "react";

interface Props {}

export default function History({}: Props): ReactElement {
  return (
    <div className="relative flex flex-col justify-between w-1/3 h-screen bg-base">
      <div className="flex-1 w-full overflow-y-scroll">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex px-4 py-3 hover:bg-surface">
            <div>
              <p className="flex items-baseline">
                <span className="mr-2 text-sm font-medium text-green-500">
                  Aman Jha
                </span>
                <span className="text-xs text-gray-500">Dec 30, 2021</span>
              </p>
              <p className="text-gray-300 opacity-70">
                Tailwind comes with pre-built, single-purpose CSS classes called
                utility classes that you use to style your application.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center w-full h-20 ">
        <button className="w-full h-full mx-2 text-2xl uppercase border-2 border-primary">
          New Question
        </button>
      </div>
    </div>
  );
}
