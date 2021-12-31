import Stripe from "stripe";

export interface PageMeta {
  title: string;
  description: string;
  cardImage: string;
}

export interface Customer {
  id: string /* primary key */;
  stripe_customer_id?: string;
}

export interface Profile {
  id: string /* primary key */;
  full_name?: string;
  avatar_url?: string;
  billing_address?: any; // type unknown;
  payment_method?: any; // type unknown;
  is_subscribed: boolean;
}
