import { FormEvent, ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import supabase from "../utils/supabase";
import { useUser } from "../utils/user";
import HomepageLayout from "../layout/HomepageLayout";
import Meta from "../components/homepage/Meta";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

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
      router.push("/dashboard");
    }
  }, [router, user]);

  const handleSubmitEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage({});

    // Check if user is in beta list
    const isInBetaList = beta_list.some(
      (beta_list_user) => beta_list_user.email === email
    );
    console.log("On beta list?", isInBetaList);

    isInBetaList
      ? login()
      : setMessage({
          type: "error",
          content: "That email isn't on the beta list.",
        });
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
        {/* <div className="flex items-center justify-center pb-12">
          <Logo width="32px" height="32px" />
        </div> */}

        <h1 className="items-center justify-center m-8 text-3xl font-bold text-center text-red-400">
          Login to Rosie
        </h1>

        {/* Display messages and errors */}
        <div className="flex flex-col space-y-4">
          {message.content && (
            <div
              className={`${
                message.type === "error" ? "text-pink-500" : "text-green-500"
              } border ${
                message.type === "error"
                  ? "border-pink-500"
                  : "border-green-500"
              } p-3`}
            >
              {message.content}
            </div>
          )}

          <form
            onSubmit={(e) => {
              handleSubmitEmail(e);
            }}
            className="flex flex-col space-y-4"
          >
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={setEmail}
              required
            />
            <Button
              variant="slim"
              type="submit"
              loading={loading}
              disabled={!email.length}
            >
              Login
            </Button>
          </form>
        </div>

        {/* <div className="flex items-center my-6">
          <div
            className="flex-grow mr-3 border-t border-gray-600"
            aria-hidden="true"
          ></div>
          <div className="text-gray-400">Or</div>
          <div
            className="flex-grow ml-3 border-t border-gray-600"
            aria-hidden="true"
          ></div>
        </div> */}

        {/* <Button
          variant="slim"
          type="submit"
          disabled={loading}
          onClick={() => handleOAuthSignIn("github")}
        >
          <GitHub />
          <span className="ml-2">Continue with GitHub</span>
        </Button> */}
      </div>
    </div>
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

// Attach the landing layout (and other nested layouts) to the page
Login.getLayout = (page: ReactElement) => {
  return (
    // Attach the Landing layout with a meta component, decide on header/footer
    <HomepageLayout
      meta={
        <Meta
          title="Sign into Rosie"
          description="Ready to become a 10x React developer?"
        />
      }
      headerActive={true}
      footerActive={false}
    >
      {page}
    </HomepageLayout>
  );
};

export default Login;
