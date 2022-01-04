import { useRouter } from "next/router";
import React, { FormEvent, ReactElement, useEffect, useState } from "react";
import useSwr from "swr";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import supabase from "../../utils/supabase";
import { useUser } from "../../utils/user";
import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_VERCEL_URL
  ? process.env.NEXT_PUBLIC_VERCEL_URL
  : process.env.NEXT_PUBLIC_BASE_URL;

interface Props {
  beta_list: {
    id: number;
    name: string;
    email: string;
  }[];
}

const Playground = ({ beta_list }: Props): ReactElement => {
  const router = useRouter();
  const { user } = useUser();
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type?: string; content?: string }>({
    type: "",
    content: "",
  });

  const handleSubmitQuestion = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage({});

    // TODO: answer question

    console.log(`${base_url}` + "api/answer/quick");
    const response = await axios.post(`${base_url}` + "api/answer/quick", {
      question: question,
      email: user?.email || "unauthenticated",
    });

    setMessage({
      type: "success",
      content: response.data.answer,
    });

    setLoading(false);
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
        <h1 className="items-center justify-center m-8 text-3xl font-bold text-center text-red-400">
          Quick Question
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
              handleSubmitQuestion(e);
            }}
            className="flex flex-col space-y-4"
          >
            <Input
              type="text"
              placeholder="Enter Question"
              value={question}
              onChange={setQuestion}
              required
            />
            <Button
              variant="slim"
              type="submit"
              loading={loading}
              disabled={!question.length}
            >
              Submit
            </Button>
          </form>
        </div>
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

export default Playground;
