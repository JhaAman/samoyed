import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import supabase from "../utils/supabase";
import styles from "../styles/Home.module.css";
import { useUser } from "../utils/user";

interface Props {
  beta_list: string[];
}

const Home = ({ beta_list }: Props) => {
  const { user } = useUser();
  console.log(user);
  console.log(user?.email);
  console.log("beta_list", beta_list);

  return (
    <>
      <Head>
        <title>Samoyed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
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
