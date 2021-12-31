import { useEffect } from "react";
import { useUser } from "../utils/user";

const Login = () => {
  const { login } = useUser();

  useEffect(login, []);

  return <p>Logging in</p>;
};

export default Login;
