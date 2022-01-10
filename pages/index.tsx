import { ReactElement, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as Separator from "@radix-ui/react-separator";
import supabase from "../utils/supabase";
import { useUser } from "../utils/user";
import HomepageLayout from "../layout/HomepageLayout";
import Meta from "../layout/Meta";
import Image from "next/image";
import { useHotkeys } from "react-hotkeys-hook";

interface Props {
  beta_list: {
    id: number;
    name: string;
    email: string;
  }[];
}

const Home = ({ beta_list }: Props) => {
  const router = useRouter();
  const { user } = useUser();
  const [state, setState] = useState(0);

  useEffect(() => {
    if (user) {
      router.push("/app");
    }
  }, [router, user]);

  function handleForward() {}

  function handleBack() {}

  useHotkeys("enter", () =>
    setState((prevState) => Math.min(prevState + 1, 3))
  );
  useHotkeys("backspace", () =>
    setState((prevState) => Math.max(prevState - 1, 0))
  );
  useHotkeys("s", () => {
    router.push("/login");
  });
  useHotkeys("esc", () => console.log("esc"));

  return (
    <>
      {state === 0 && (
        <div className="flex items-center justify-between min-h-screen text-white bg-gradient-to-tr from-hero-left to-hero-right">
          <div className="flex flex-col w-2/5 ml-20 ">
            <div>
              <h1 className="animate-[fadeIn_0.5s_linear] my-4 text-5xl">
                As Easy As Coding Gets
              </h1>
              <h2 className="animate-[fadeIn_0.5s_linear] leading-relaxed max-w-prose">
                We{"'"}re tired of crawling through StackOverflow and done with
                tutorial hell.
                <br />
                So we built{" "}
                <span className="font-semibold text-primary">Rosie</span>
              </h2>
            </div>
            <div className="flex items-center justify-center w-full mt-8">
              <button
                onClick={() =>
                  setState((prevState) => Math.min(prevState + 1, 3))
                }
                className="animate-[fadeIn_0.5s_linear] flex items-center mt-4 py-2 text-sm font-medium text-white transition transform rounded-full backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
              >
                <span className="">
                  Press{" "}
                  <span className="px-1 py-0.5 rounded m-1 font-bold bg-gray-800">
                    enter
                  </span>{" "}
                  to begin <span className="w-5 h-5 opacity-70">&#8594;</span>
                </span>
              </button>
            </div>
          </div>

          <div className="pt-1 pl-1 rounded-l-xl bg-primary animate-[fadeIn_1s_linear]">
            <Image
              src="/ss.png"
              alt="Rosie"
              width={653}
              height={500}
              className="rounded-l-xl"
            />
          </div>
        </div>
      )}
      {state === 1 && (
        <div className="flex items-center justify-between min-h-screen text-white bg-gradient-to-tr from-hero-left to-hero-right">
          <div className="flex flex-col w-2/5 ml-20 left">
            <div>
              <h2 className="animate-[fadeIn_0.5s_linear] text-xl leading-relaxed max-w-prose">
                You spend 50% of your time debugging and learning new things.
                <br />
                <br />
                What if you didn{"'"}t have to go through dozens of links and
                videos to find the answer you want?
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-8">
              <button
                onClick={() =>
                  setState((prevState) => Math.min(prevState + 1, 3))
                }
                className="animate-[fadeIn_0.5s_linear] flex items-center mt-4 py-2 text-sm font-medium text-white transition transform rounded-full backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
              >
                <span className="">
                  Press{" "}
                  <span className="px-1 py-0.5 rounded m-1 font-bold bg-gray-800">
                    enter
                  </span>{" "}
                  to continue{" "}
                  <span className="w-5 h-5 opacity-70">&#8594;</span>
                </span>
              </button>

              <button
                onClick={() =>
                  setState((prevState) => Math.min(prevState - 1, 0))
                }
                className="animate-[fadeIn_0.5s_linear] flex items-center py-1 text-sm font-medium text-white transition transform rounded-full backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
              >
                <span className="">
                  <span className="w-5 h-5 opacity-70">&#8592;</span>
                  <span className="px-1 py-0.5 rounded m-1 font-bold bg-gray-800">
                    backspace
                  </span>{" "}
                  to go back
                </span>
              </button>
            </div>
          </div>

          <div className="mr-20 border rounded-xl border-primary">
            <Image
              src="/google_example.png"
              alt="Rosie"
              className=" rounded-xl border-primary"
              width={500}
              height={550}
            />
          </div>
        </div>
      )}
      {/* {state === 2 && (
        <div className="flex items-center justify-between min-h-screen text-white bg-gradient-to-tr from-hero-left to-hero-right">
          <div className="flex flex-col w-2/5 ml-20 left">
            <div>
              <h1 className="animate-[fadeIn_0.5s_linear] my-4 text-5xl">
                As Easy As Coding Gets
              </h1>
              <h2 className="animate-[fadeIn_0.5s_linear] leading-relaxed max-w-prose">
                We{"'"}re tired of crawling through StackOverflow and done with
                tutorial hell.
                <br />
                So we built{" "}
                <span className="font-semibold text-primary">Rosie</span>
              </h2>
            </div>
            <div className="flex items-center justify-center w-full mt-8">
              <button
                onClick={() =>
                  setState((prevState) => Math.min(prevState + 1, 3))
                }
                className="animate-[fadeIn_0.5s_linear] flex items-center mt-4 py-2 text-sm font-medium text-white transition transform rounded-full backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
              >
                <span className="">
                  Press{" "}
                  <span className="px-1 py-0.5 rounded m-1 font-bold bg-gray-800">
                    enter
                  </span>{" "}
                  to begin <span className="w-5 h-5 opacity-70">&#8594;</span>
                </span>
              </button>
            </div>
          </div>

          <div className=" right">
            <Image src="/ss.png" alt="Rosie" width={653} height={500} />
          </div>
        </div>
      )} */}
      {/* {state === 3 && (
        <div className="flex items-center justify-between min-h-screen text-white bg-gradient-to-tr from-hero-left to-hero-right">
          <div className="flex flex-col w-2/5 ml-20 left">
            <div>
              <h1 className="animate-[fadeIn_0.5s_linear] my-4 text-5xl">
                As Easy As Coding Gets
              </h1>
              <h2 className="animate-[fadeIn_0.5s_linear] leading-relaxed max-w-prose">
                We{"'"}re tired of crawling through StackOverflow and done with
                tutorial hell.
                <br />
                So we built{" "}
                <span className="font-semibold text-primary">Rosie</span>
              </h2>
            </div>
            <div className="flex items-center justify-center w-full mt-8">
              <button
                onClick={() =>
                  setState((prevState) => Math.min(prevState + 1, 3))
                }
                className="animate-[fadeIn_0.5s_linear] flex items-center mt-4 py-2 text-sm font-medium text-white transition transform rounded-full backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
              >
                <span className="">
                  Press{" "}
                  <span className="px-1 py-0.5 rounded m-1 font-bold bg-gray-800">
                    enter
                  </span>{" "}
                  to begin <span className="w-5 h-5 opacity-70">&#8594;</span>
                </span>
              </button>
            </div>
          </div>

          <div className=" right">
            <Image src="/ss.png" alt="Rosie" width={653} height={500} />
          </div>
        </div>
      )} */}
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
          description="Get answers for any React questions instantly"
        />
      }
      headerActive={true}
      footerActive={true}
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
