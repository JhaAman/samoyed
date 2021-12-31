import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import supabase from "../utils/supabase";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold underline"> Hello world! </h1>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data, error } = await supabase.from("posts").select("*");
  return {
    props: {
      data,
    },
  };
};
