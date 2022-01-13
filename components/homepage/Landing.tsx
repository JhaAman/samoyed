import React, { ReactElement } from "react";
import { useMediaQuery } from "react-responsive";

interface Props {
  handleForward: () => void;
  handleBack: () => void;
}

export default function Landing({
  handleForward,
  handleBack,
}: Props): ReactElement {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white lg:justify-between lg:flex-row bg-gradient-to-tr from-hero-left to-hero-right">
      <div className="flex flex-col w-4/5 mt-16 md:w-2/5 md:mt-0 lg:ml-20 ">
        <div>
          <h1 className="my-4 text-4xl animate-fade-in-down">
            As Easy As Coding Gets
          </h1>
          <h2 className="text-xl leading-relaxed animate-fade-in-down max-w-prose">
            <span className="font-semibold text-primary">Rosie</span>. An AI
            that answers coding questions for you. Instantly.
          </h2>
        </div>
        <div className="flex items-center justify-center w-full mt-8 md:mb-8">
          <button
            onClick={() => handleForward()}
            className="flex items-center py-2 mt-4 font-medium text-white transition transform rounded-full animate-fade-in-down shine backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
          >
            <span
            // className={styles.shimmer}
            >
              Press{" "}
              <span className="px-1 py-0.5 rounded m-1 font-bold bg-primary-dark">
                {isMobile ? "here" : "enter"}
              </span>{" "}
              to begin <span className="w-5 h-5 opacity-70">&#8594;</span>
            </span>
          </button>
        </div>
      </div>

      <div className="mx-2 mb-16 md:mx-0 md:mb-0 animate-fade-in-down">
        <video autoPlay muted loop className="h-96">
          <source src="/Error.mp4" type="video/mp4" />
        </video>
        {/* <Image
      src="/ss.png"
      alt="Rosie"
      width={653}
      height={500}
      className="rounded-l-xl"
    /> */}
      </div>
    </div>
  );
}
