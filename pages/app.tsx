import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { useEffect } from "react";
import AnswerPanel from "../components/app/AnswerPanel";
import History from "../components/app/History";
import QuestionPanel from "../components/app/QuestionPanel";
import supabase from "../utils/supabase";
import { useUser } from "../utils/user";

let base_url = process.env.NEXT_PUBLIC_BASE_URL;
if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
  base_url = process.env.NEXT_PUBLIC_VERCEL_URL;
}

interface Props {
  beta_list: {
    id: number;
    name: string;
    email: string;
  }[];
}

const App = ({ beta_list }: Props) => {
  const router = useRouter();
  const { user, profile, logout } = useUser();

  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<{ type?: string; content?: string }>({
    type: "",
    content: "Waiting for a question...",
  });
  const [clarifyingPrompt, setClarifyingPrompt] = useState("");

  // See user access abilities
  useEffect(() => {
    if (!user) {
      router.push("/login");
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

  const handleSubmitQuestion = async (
    e: FormEvent<HTMLFormElement>,
    q: string, // the question content
    a: string // the type of answer the user wants
  ) => {
    e.preventDefault();
    setLoading(true);
    setQuestion(q);
    setAnswer({
      type: "success",
      content: "Thinking...",
    });

    const response = await axios.post(`${base_url}` + "/api/answer/quick", {
      question: q,
      answerType: a,
      email: user?.email || "unauthenticated",
    });

    setAnswer({
      type: "success",
      content: response.data.answer,
    });

    setClarifyingPrompt(q + `\n\n\n` + response.data.answer);

    setLoading(false);
  };

  return (
    <>
      {/* Main App */}
      <div className="flex h-screen">
        {/* Left Side */}
        {/* <History/> */}
        {/* Right Side */}
        <div className="flex flex-col w-full h-screen gap-5 overflow-y-scroll bg-base border-l-white">
          <QuestionPanel
            handleSubmitQuestion={handleSubmitQuestion}
            loading={loading}
          />

          <AnswerPanel answer={answer} clarifyingPrompt={clarifyingPrompt} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const { data: beta_list } = await supabase.from("beta_list").select("*");
  return {
    props: {
      beta_list,
    },
  };
};

export default App;
