import { useEffect } from "react";
import { useUser } from "../../utils/user";

const Dashboard = () => {
  const { logout } = useUser();

  useEffect(() => {});

  return <p>Welcome to dashboard</p>;
};

export default Dashboard;
