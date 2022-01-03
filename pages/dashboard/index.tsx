import { useRouter } from "next/router";
import { useEffect } from "react";
import supabase from "../../utils/supabase";
import { useUser } from "../../utils/user";

interface Props {
  beta_list: {
    id: number;
    name: string;
    email: string;
  }[];
}

const Dashboard = ({ beta_list }: Props) => {
  const router = useRouter();
  const { user, profile, logout } = useUser();

  // See if user access abilities
  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      // Check if user is in beta list
      const isInBetaList = beta_list.some(
        (beta_list_user) => beta_list_user.email === user.email
      );

      if (!isInBetaList) {
        console.log("User is not in beta list");
      }

      // TODO: Check if user is subscribed, has lifetime access, or is on a trial
    }
  }, [beta_list, router, user]);

  return (
    <>
      {/* Main App */}
      <div className="flex flex-col h-screen">
        {/* Header search bar */}
        <div className="flex w-full h-10 bg-primary"></div>
        <div className="flex flex-1 w-full bg-overflow">
          {/* Question panel */}
          <div className="flex flex-col items-center w-2/5 m-4 bg-base">
            <div className="mx-5">
              {/* Question Type */}
              <div className="bg-surface ">
                <h1 className="text-xl">Question Type</h1>
                <h2>Dropdown</h2>
              </div>
            </div>
          </div>
          {/* Answer panel */}
          <div className="flex flex-col items-center w-3/5 m-4 bg-base">
            <div className="mx-5">
              {/* Question Type */}
              <div className="bg-surface ">
                <h1 className="text-xl">Question Type</h1>
                <h2>Dropdown</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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

export default Dashboard;
