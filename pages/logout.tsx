import { useEffect } from "react";
import { useUser } from "../utils/user";

const Login = () => {
  const { logout } = useUser();

  useEffect(() => {
    logout();
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-hero-left to-hero-right">
      <p>Logging out</p>
    </div>
  );
};

export default Login;
