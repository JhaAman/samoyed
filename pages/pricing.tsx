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
  // for each price in prices, retrieve the product associated with the price
  const plans = await Promise.all(
    prices.map(async (price: any) => {
      const product = await stripe.products.retrieve(price.product);
      return {
        ...price,
        product,
      };
    })
  );
  const sortedPlans = plans.sort((a, b) => a.unit_amount - b.unit_amount);

  return {
    props: {
      sortedPlans,
    },
  };
};

export default Pricing;
