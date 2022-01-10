import { ReactElement, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as Separator from "@radix-ui/react-separator";
import supabase from "../utils/supabase";
import { useUser } from "../utils/user";
import HomepageLayout from "../layout/HomepageLayout";
import Meta from "../layout/Meta";
import Image from "next/image";
import { useHotkeys } from "react-hotkeys-hook";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

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

  function handleForward() {
    setState((prevState) => Math.min(prevState + 1, 3));
  }

  function handleBack() {
    setState((prevState) => Math.max(prevState - 1, 0));
  }

  useHotkeys("enter", () => handleForward());
  useHotkeys("backspace", () => handleBack());
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
                onClick={() => handleForward()}
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
              <h1 className="animate-[fadeIn_0.5s_linear] text-4xl my-4">
                The Problem
              </h1>
              <h2 className="animate-[fadeIn_0.5s_linear] text-lg leading-relaxed max-w-prose">
                <p className="mb-4">
                  Being great at searching google is half of what it means to
                  program.
                </p>

                <p>
                  What if you didn{"'"}t have to spend hours going through links
                  and videos? What if you could just get an answer right away?
                </p>
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-8">
              <button
                onClick={() => handleForward()}
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
                onClick={() => handleBack()}
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

          <div className="mr-20 border rounded-xl border-primary animate-[fadeIn_1s_linear]">
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

      {state === 2 && (
        <div className="flex items-center justify-between min-h-screen text-white bg-gradient-to-tr from-hero-left to-hero-right">
          <div className="flex flex-col w-2/5 ml-20 left">
            <div>
              <h1 className="animate-[fadeIn_0.5s_linear] text-4xl my-4">
                Rosie Demo
              </h1>
              <h2 className="animate-[fadeIn_0.5s_linear] text-lg leading-relaxed max-w-prose">
                <p className="mb-4">
                  Ask Rosie a question. We give you the answer. Simple.
                </p>

                <p>
                  Obscure error message? Need to understand a concept? Not sure
                  how to do something? Lonely? Rosie is here for you.
                </p>
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-8">
              <button
                onClick={() => handleForward()}
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
                onClick={() => handleBack()}
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

      {state === 3 && (
        <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-tr from-hero-left to-hero-right">
          {/* <h1 className="mb-8 text-3xl">Preorder Rosie</h1> */}

          <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
            <div className=" animate-[fadeIn_0.5s_linear] flex flex-col rounded-xl w-72 h-96 bg-surface">
              <div className="flex flex-col items-center justify-between rounded-t-xl bg-gradient-to-br from-[#C545F7] to-[#456FF7] w-72 h-72">
                <h3 className="mt-4 text-xl">Monthly</h3>
                <span className="flex flex-col items-center justify-center text-center">
                  <h2 className="text-3xl">$35/month</h2>
                  {/* <p>LIFETIME ACCESS</p> */}
                </span>
                <h4 className="mb-2">Join the Waitlist</h4>
              </div>
              <div className="animate-[fadeIn_0.5s_linear] flex items-center justify-center flex-1">
                <Button
                  className="flex items-center justify-center lowercase"
                  onClick={
                    () => console.log("preorder")
                    // TODO: implement
                  }
                >
                  <span className="">Request Access</span>
                </Button>
              </div>
            </div>

            <div className=" animate-[fadeIn_0.5s_linear] flex flex-col rounded-xl w-72 h-96 bg-surface">
              <div className="flex flex-col items-center justify-between rounded-t-xl bg-gradient-to-br from-primary to-[#F74545] w-72 h-72">
                <h3 className="mt-4 text-xl">Earlybird</h3>
                <span className="flex flex-col items-center justify-center text-center">
                  <h2 className="text-3xl">$150</h2>
                  <p>LIFETIME ACCESS</p>
                </span>
                <h4 className="mb-2">{"87"} spots left</h4>
              </div>
              <div className="animate-[fadeIn_0.5s_linear] flex items-center justify-center flex-1">
                <Button
                  className="flex items-center justify-center lowercase"
                  onClick={
                    () => console.log("preorder")
                    // TODO: implement
                  }
                >
                  <span className="">Preorder</span>
                </Button>
              </div>
            </div>

            <div className=" animate-[fadeIn_0.5s_linear] flex flex-col rounded-xl w-72 h-96 bg-surface">
              <div className="flex flex-col items-center justify-between rounded-t-xl bg-gradient-to-br from-[#F74545] to-[#F7A145] w-72 h-72">
                <h3 className="mt-4 text-xl">Lifetime</h3>
                <span className="flex flex-col items-center justify-center text-center">
                  <h2 className="text-3xl">$225</h2>
                  <p>LIFETIME ACCESS</p>
                </span>
                <h4 className="mb-2">{"100"} spots left</h4>
              </div>
              <div className="animate-[fadeIn_0.5s_linear] flex items-center justify-center flex-1">
                <Button
                  className="flex items-center justify-center lowercase"
                  onClick={
                    () => console.log("preorder")
                    // TODO: implement
                  }
                >
                  <span className="">Preorder</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-8">
            {/* TODO: get emails for non-subscribing people */}
            {/* <button
              onClick={() => handleForward()}
              className="animate-[fadeIn_0.5s_linear] flex items-center mt-4 py-2 text-sm font-medium text-white transition transform rounded-full backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
            >
              <span className="">
                Press{" "}
                <span className="px-1 py-0.5 rounded m-1 font-bold bg-gray-800">
                  enter
                </span>{" "}
                to see FAQ <span className="w-5 h-5 opacity-70">&#8594;</span>
              </span>
            </button> */}

            <button
              onClick={() => handleBack()}
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
      )}
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
      headerActive={false}
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
