import React, { ReactElement } from "react";
import initStripe from "stripe";

interface Props {
  plans: any;
}

const Pricing = ({ plans }: Props) => {
  console.log(plans);
  return <div></div>;
};

export const getStaticProps = async () => {
  const stripe = new initStripe(
    process.env.STRIPE_SECRET_KEY as string,
    {} as any
  );

  const { data: prices } = await stripe.prices.list();
  const plans = await Promise.all(
    prices.map(async (price) => {
      const product = await stripe.products.retrieve(price.product as string);
      return {
        id: price.id,
        name: product.name,
        price: price.unit_amount,
        interval: price.recurring?.interval,
        currency: price.currency,
      };
    })
  );

  return {
    props: {
      plans,
    },
  };
};

export default Pricing;
