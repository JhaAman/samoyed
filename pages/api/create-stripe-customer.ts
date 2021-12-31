import { NextApiRequest, NextApiResponse } from "next";
import initStripe from "stripe";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const stripe = new initStripe(
    process.env.STRIPE_SECRET_KEY as string,
    {} as any
  );

  const customer = await stripe.customers.create({
    email: req.body.record.email,
  });

  res.send({ message: `Stripe customer created: ${customer.id}` });
};

export default handler;
