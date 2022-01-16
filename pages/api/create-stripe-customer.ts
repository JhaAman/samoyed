/*
  SLS function that is called when a new profile is created. It automatically creates
  a Stripe customer for the profile.
*/

import { NextApiRequest, NextApiResponse } from "next";
import stripe from "../../utils/stripe";
import supabase from "../../utils/supabase";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  console.log("email is ", req.body.record.email);
  console.log("id is ", req.body.record.id);

  const customer = await stripe.customers.create({
    email: req.body.record.email,
  });

  await supabase
    .from("profile")
    .update({
      stripe_customer: customer.id,
    })
    .eq("id", req.body.record.id);

  res.send({ message: `Stripe customer created: ${customer.id}` });
};

export default handler;
