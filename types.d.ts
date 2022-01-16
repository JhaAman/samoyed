import Stripe from "stripe";

export interface PageMeta {
  title: string;
  description: string;
  cardImage: string;
}

export interface Profile {
  id: string /* primary key */;
  interval: "monthly" | "yearly" | "lifetime" | "none";
  stripe_customer: string;
  email: string;
  name: string;
  company: string;
  subscription: "none" | "onboarding" | "trial" | "subscribed" | "expired";
}
