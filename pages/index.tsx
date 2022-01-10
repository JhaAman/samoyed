import { ReactElement, useEffect, useState } from "react";
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

enum landingState {
  homepage,
  press,
  demo,
  preorder,
}

const Home = ({ beta_list }: Props) => {
  const router = useRouter();
  const { user } = useUser();
  const [state, setState] = useState(landingState.homepage);

  useEffect(() => {
    if (user) {
      router.push("/app");
    }
  }, [router, user]);

  return (
    <>
      {state === landingState.homepage && (
        <div className="flex items-center justify-center min-h-screen text-white bg-gradient-to-tr from-hero-left to-hero-right">
          <div className="left ">
            <h1 className="text-6xl">As Easy As Coding Gets</h1>
            <h2>
              We{"'"}re tired of crawling through StackOverflow and done with
              tutorial hell. So we built{" "}
              <span className="font-semibold text-primary">Rosie</span>
            </h2>
          </div>
          <div className="right "></div>
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
