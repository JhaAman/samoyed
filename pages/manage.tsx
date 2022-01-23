import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { useEffect } from "react";
import AnswerPanel from "../components/app/AnswerPanel";
import History from "../components/app/History";
import QuestionPanel from "../components/app/QuestionPanel";
import stripe from "../utils/stripe";
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
  prices: {
    id: string;
    name: string;
    amount: number;
    currency: string;
    interval: string;
  }[];
  products: any[];
}

const App = ({ beta_list, prices, products }: Props) => {
  const router = useRouter();
  const { user, profile, logout } = useUser();

  console.log("PRICES", prices);
  console.log("PRODUCTS", products);

  const [loading, setLoading] = useState(false);

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

  return (
    <>
      {/* Main App */}
      <div className="flex h-screen"></div>
    </>
  );
};

export const getStaticProps = async () => {
  const { data: beta_list } = await supabase.from("beta_list").select("*");

  const { data: prices } = await stripe.prices.list();
  const products = await Promise.all(
    prices.map(async (price) => {
      const product = await stripe.products.retrieve(price.product as string);
      return product;
    })
  );

  return {
    props: {
      beta_list,
      prices,
      products,
    },
  };
};

export default App;
