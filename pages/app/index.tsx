import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import AnswerPanel from "../../components/app/AnswerPanel";
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
        <div className="relative flex flex-col justify-between w-1/3 h-screen bg-base">
          {/* History */}
          <div className="flex-1 w-full overflow-y-scroll">
            {/* Have 10 divs mapped */}
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="flex px-4 py-3 hover:bg-surface">
                <div>
                  <p className="flex items-baseline">
                    <span className="mr-2 text-sm font-medium text-green-500">
                      Aman Jha
                    </span>
                    <span className="text-xs text-gray-500">Dec 30, 2021</span>
                  </p>
                  <p className="text-gray-300 opacity-70">
                    Tailwind comes with pre-built, single-purpose CSS classes
                    called utility classes that you use to style your
                    application.
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* New Question Button */}
          <div className="flex items-center justify-center w-full h-20 ">
            <button className="w-full h-full mx-2 text-2xl uppercase border-2 border-primary">
              New Question
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col w-2/3 h-screen overflow-y-scroll border-l-2 bg-base border-l-white">
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
