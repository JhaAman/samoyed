import initStripe from "stripe";

const stripe = new initStripe(
  process.env.STRIPE_SECRET_KEY as string,
  {} as any
);

export default stripe;
