import { useEffect } from "react";
import { useUser } from "../utils/user";

const Login = () => {
  const { logout } = useUser();

  useEffect(() => {
    logout();
  });

  return <p>Logging out</p>;
};

export default Login;
