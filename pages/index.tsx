import supabase from "../utils/supabase";
import styles from "../styles/Home.module.css";
import { useUser } from "../utils/user";
import { ReactElement, useEffect, useState } from "react";
import ThemeSwitch from "../components/ThemeSwitch";
import HomepageLayout from "../layout/HomepageLayout";
import Meta from "../components/homepage/Meta";
import * as Separator from "@radix-ui/react-separator";
import Image from "next/image";
import Button from "../components/ui/Button";

interface Props {
  beta_list: {
    id: number;
    name: string;
    email: string;
  }[];
}

const Home = ({ beta_list }: Props) => {
  const { user, profile } = useUser();

  return (
    <>
      {/* Header (command key) */}
      {/* A div that's absolutely at the top of the screen */}

      {/* <BrowserView> */}
      <div className="absolute top-0 flex w-full">
        {/* Rosie Logo */}
        <button className="flex items-center justify-center w-12 h-12 p-2 m-10 mr-auto border-2 border-white hover:opacity-40 opacity-20 rounded-xl">
          <Image
            src="/static/command-symbol-dark.svg"
            width={24}
            height={24}
            alt="command-symbol"
            className=""
          ></Image>
        </button>

        {/* Command Button */}
        <button className="flex items-center justify-center w-12 h-12 p-2 m-10 ml-auto border-2 border-white hover:opacity-40 opacity-20 rounded-xl">
          <Image
            src="/static/command-symbol-dark.svg"
            width={24}
            height={24}
            alt="command-symbol"
            className=""
          ></Image>
        </button>
      </div>
      {/* </BrowserView> */}

      <div className="flex min-h-screen text-white bg-gradient-to-tr from-hero-left to-hero-right">
        <div className="flex flex-col items-center justify-center flex-1 ">
          <div className="justify-center text-center">
            <h1 className="my-3 text-4xl">
              Welcome to <span className="font-bold text-primary">Rosie</span>.
            </h1>
            <p>A React developer{"'"}s best friend</p>
          </div>
          <Separator.Root className="w-40 my-16 bg-gray-500 h-0.5 opacity-30" />

          <button
            onClick={() => {}}
            className="flex items-center px-1 py-2 text-sm font-medium text-white transition transform rounded-full backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
          >
            <span className="mr-3">
              Press <span className="font-bold">enter</span> to begin
            </span>
            <span className="w-5 h-5 opacity-70">&#8594;</span>
            {/* <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 opacity-70">
              <path
                d="M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg> */}
          </button>
        </div>
      </div>

      {/* Footer (sign in) */}
      <div className="absolute bottom-0 left-0 right-0 opacity-50 text-xs flex flex-col items-center justify-center mb-16 animate-[moveUpDown_3s_ease-in-out_infinite]">
        <button>Press S to sign in</button>
      </div>
    </>
  );
};

// Attach the landing layout (and other nested layouts) to the page
Home.getLayout = (page: ReactElement) => {
  return (
    // Attach the Landing layout with a meta component, decide on header/footer
    <HomepageLayout
      meta={
        <Meta
          title="Rosie"
          description="Welcome to Rosie - code React apps 10x faster"
        />
      }
      headerActive={false}
      footerActive={false}
    >
      {page}
    </HomepageLayout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data: beta_list, error } = await supabase
    .from("beta_list")
    .select("*");
  return {
    props: {
      beta_list,
    },
  };
};
