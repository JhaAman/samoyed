import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import AnswerPanel from "../../components/app/AnswerPanel";
import History from "../../components/app/History";
import QuestionPanel from "../../components/app/QuestionPanel";
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
      <div className="flex h-screen">
        {/* Left Side */}
        {/* <History/> */}
        {/* Right Side */}
        <div className="flex flex-col w-full h-screen gap-5 overflow-y-scroll bg-base border-l-white">
          <QuestionPanel />

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
