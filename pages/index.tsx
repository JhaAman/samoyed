import supabase from "../utils/supabase";
import styles from "../styles/Home.module.css";
import { useUser } from "../utils/user";
import { ReactElement, useEffect, useState } from "react";
import ThemeSwitch from "../components/ThemeSwitch";
import HomepageLayout from "../layout/HomepageLayout";
import Meta from "../components/homepage/Meta";
import * as Separator from "@radix-ui/react-separator";

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
      <div className="flex min-h-screen text-gray-100 bg-th-background">
        <div className="flex flex-col items-center justify-center flex-1 ">
          <div className="justify-center text-center">
            <h1 className="text-2xl">
              Welcome to <span className="font-bold text-red-500">Rosie</span>.
            </h1>
            <p>A React developer best friend.</p>
          </div>
          <Separator.Root className="w-40 my-5 bg-gray-500 h-0.5 opacity-30" />
          <div>
            <p>next</p>
          </div>
          <button
            onClick={() => {}}
            className="flex items-center px-3 py-2 mt-8 text-sm font-medium text-white transition transform bg-gray-300 rounded-full backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
          >
            <span className="mr-3">
              Press <span className="font-bold">enter</span> to begin
            </span>
            <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 opacity-70">
              <path
                d="M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
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
