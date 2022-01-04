import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import AnswerPanel from "../../components/app/AnswerPanel";
import QuestionPanel from "../../components/app/QuestionPanel";
import QuestionType from "../../components/app/QuestionPanel/QuestionType";
import { QuestionTypeState } from "../../components/app/QuestionPanel/QuestionType/QuestionType";
import supabase from "../../utils/supabase";
import { useUser } from "../../utils/user";

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

  const [questionType, setQuestionType] = useState<QuestionTypeState>(
    QuestionTypeState.ExplainConcept
  );

  // See if user access abilities
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

  return (
    <>
      {/* Main App */}
      <div className="h-screen ">
        {/* Header search bar */}
        <div className="absolute flex items-center justify-center w-screen h-12 bg-rosie-900">
          <QuestionType changeState={setQuestionType} />
        </div>

        {/* Main App */}
        <div className="flex flex-row w-full max-h-screen min-h-screen pt-12 bg-overflow">
          {/* Question panel */}
          <QuestionPanel />

          {/* Answer panel */}
          <AnswerPanel />
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
