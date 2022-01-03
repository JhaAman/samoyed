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

  useEffect(() => {
    if (!user) {
      router.push("/dashboard");
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

  return <p>Welcome to dashboard</p>;
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
