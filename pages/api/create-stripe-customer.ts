import { NextApiRequest, NextApiResponse } from "next";
import initStripe from "stripe";
import supabase from "../../utils/supabase";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const stripe = new initStripe(
    process.env.STRIPE_SECRET_KEY as string,
    {} as any
  );

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
