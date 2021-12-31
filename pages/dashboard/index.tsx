import { useEffect } from "react";
import { useUser } from "../../utils/user";

const Dashboard = () => {
  const { logout } = useUser();

  useEffect(() => {});

  return <p>Logging out</p>;
};

export default Dashboard;
