import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import supabase from "../utils/supabase";
import styles from "../styles/Home.module.css";
import { useUser } from "../utils/user";
import { useEffect, useState } from "react";
import ThemeSwitch from "../components/ThemeSwitch";

interface Props {
  beta_list: {
    id: number;
    name: string;
    email: string;
  }[];
}

const Home = ({ beta_list }: Props) => {
  const { user, profile } = useUser();
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(user);
    console.log(user?.email);
    console.log("beta_list", beta_list);

    // print true if user is in beta list
    const isInBetaList = beta_list.some(
      (beta_list_user) => beta_list_user.email === user?.email
    );
    console.log("On beta list?", isInBetaList);

    // check if user is subscribed
    // const isSubscribed = profile?.is_subscribed;
    console.log("profile", profile);

    isInBetaList ? setMessage("You are in the beta list!") : setMessage("🤬");
  }, [user, profile]);

  return (
    <>
      <Head>
        <title>Samoyed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">{message}</h1>
    </>
  );
};

export default Home;

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
