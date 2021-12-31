import supabase from "../utils/supabase";
import { useUser } from "../utils/user";
import axios from "axios";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  const loadPortal = async () => {
    const { data } = await axios.get("/api/portal");
    router.push(data.url);
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-3xl mb-6">Dashboard</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: { req: any }) => {
  const { req } = ctx;

  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }

  return {
    props: {},
  };
};

export default Dashboard;
