import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import * as Separator from "@radix-ui/react-separator";
import supabase from "../utils/supabase";
import { useUser } from "../utils/user";
import HomepageLayout from "../layout/HomepageLayout";
import Meta from "../layout/Meta";

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

  useEffect(() => {
    if (user) {
      router.push("/app");
    }
  }, [router, user]);

  return (
    <>
      <div className="flex min-h-screen text-white bg-gradient-to-tr from-hero-left to-hero-right">
        <div className="flex flex-col items-center justify-center flex-1 ">
          <div className="justify-center text-center">
            <h1 className="my-3 animate-[fadeIn_0.5s_linear] text-4xl">
              Welcome to <span className="font-bold text-primary">Rosie</span>
            </h1>
            <p className="animate-[fadeIn_0.5s_linear]">
              A React developer{"'"}s best friend
            </p>
          </div>
          <Separator.Root className="animate-[scaleIn_0.25s_linear] w-40 my-16 bg-gray-500 h-0.5 opacity-30" />

          <button
            onClick={() => {}}
            className="animate-[fadeIn_0.5s_linear] flex items-center px-1 py-2 text-sm font-medium text-white transition transform rounded-full backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
          >
            <span className="">
              Press <span className="font-bold">enter</span> to begin{" "}
              <span className="w-5 h-5 opacity-70">&#8594;</span>
            </span>
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
