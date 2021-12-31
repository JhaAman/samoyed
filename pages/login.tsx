import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { useUser } from "../utils/user";

interface Props {
  beta_list: {
    id: number;
    name: string;
    email: string;
  }[];
}

const Login = ({ beta_list }: Props) => {
  const router = useRouter();
  const { user, login } = useUser();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type?: string; content?: string }>({
    type: "",
    content: "",
  });

  useEffect(() => {
    if (user) {
      router.push("/app");
    }

    console.log("beta_list", beta_list);
  }, []);

  const handleSubmitEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage({});

    // Check if user is in beta list
    const isInBetaList = beta_list.some(
      (beta_list_user) => beta_list_user.email === email
    );
    console.log("On beta list?", isInBetaList);
  };

  return (
    <>
      <h1>Login</h1>
      {/* A form that takes an email as input */}
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

export default Login;
