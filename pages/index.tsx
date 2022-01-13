import {
  ReactElement,
  Fragment,
  useCallback,
  useEffect,
  useState,
} from "react";
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
import { Dialog, Transition } from "@headlessui/react";
import styles from "../styles/Enter.module.css";
import Landing from "../components/homepage/Landing";
import Preorder from "../components/homepage/Preorder";

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
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    if (user) {
      router.push("/app");
    }
  }, [router, user]);

  function handleForward() {
    setState((prevState) => Math.min(prevState + 1, 1));
    setIsWaitlistOpen(false);
  }

  function handleBack() {
    setState((prevState) => Math.max(prevState - 1, 0));
    setIsWaitlistOpen(false);
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
        <Landing handleForward={handleForward} handleBack={handleBack} />
      )}

      {/* {state === 1 && (
        <div className="flex items-center justify-between min-h-screen text-white bg-gradient-to-tr from-hero-left to-hero-right">
          <div className="flex flex-col w-2/5 ml-20 left">
            <div>
              <h1 className="my-4 text-4xl animate-fade-in-down">
                Devs need answers <span className="italic">fast</span>.
              </h1>
              <h2 className="text-lg leading-relaxed animate-fade-in-down max-w-prose">
                <p className="mb-4">And Google isn{"'"}t cutting it</p>

                <p>
                  What if you didn{"'"}t have to spend hours going through links
                  and videos? What if you could just get an answer right away?
                </p>
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-8 ">
              <button
                onClick={() => handleForward()}
                className="flex items-center py-2 mt-4 font-medium text-white transition transform rounded-full animate-fade-in-down backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
              >
                <span className="">
                  Press{" "}
                  <span className="px-1 py-0.5 rounded m-1 font-bold bg-primary-dark">
                    enter
                  </span>{" "}
                  to continue{" "}
                  <span className="w-5 h-5 opacity-70">&#8594;</span>
                </span>
              </button>

              <button
                onClick={() => handleBack()}
                className="flex items-center py-1 font-medium text-white transition transform rounded-full animate-fade-in-down backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
              >
                <span className="">
                  <span className="w-5 h-5 opacity-70">&#8592;</span>
                  <span className="px-1 py-0.5 rounded m-1 font-bold bg-primary-dark">
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
              <h1 className="my-4 text-4xl animate-fade-in-down">Rosie Demo</h1>
              <h2 className="text-lg leading-relaxed animate-fade-in-down max-w-prose">
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
                className="flex items-center py-2 mt-4 text-sm font-medium text-white transition transform rounded-full animate-fade-in-down backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
              >
                <span className="">
                  Press{" "}
                  <span className="px-1 py-0.5 rounded m-1 font-bold bg-primary-dark">
                    enter
                  </span>{" "}
                  to continue{" "}
                  <span className="w-5 h-5 opacity-70">&#8594;</span>
                </span>
              </button>

              <button
                onClick={() => handleBack()}
                className="flex items-center py-1 text-sm font-medium text-white transition transform rounded-full animate-fade-in-down backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
              >
                <span className="">
                  <span className="w-5 h-5 opacity-70">&#8592;</span>
                  <span className="px-1 py-0.5 rounded m-1 font-bold bg-primary-dark">
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
      )} */}

      {state === 1 && (
        <Preorder
          handleForward={handleForward}
          handleBack={handleBack}
          isWaitlistOpen={isWaitlistOpen}
          setIsWaitlistOpen={setIsWaitlistOpen}
        />
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
