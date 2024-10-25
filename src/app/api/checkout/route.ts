import { NextResponse } from "next/server";

interface StripeProduct {
  price: string; 
  quantity: number;
}

export const POST = async (request: any) => {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const { products } = await request.json();
  let activeProducts = await stripe.products.list({ active: true });

  try {
    for (const product of products) {
      const matchedProducts = activeProducts?.data?.find(
        (stripeProduct: any) =>
          stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      if (matchedProducts === undefined) {
        await stripe.products.create({
          name: product.name,
          default_price_data: {
            currency: "usd",
            unit_amount: Math.round(product.price * 100), 
          },
          images: product.images, 
        });
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }

  activeProducts = await stripe.products.list({ active: true });
  
  const stripeProducts: StripeProduct[] = [];
  
  for (const product of products) {
    const matchedProduct = activeProducts?.data.find(
      (stripeProduct: any) =>
        stripeProduct.name.toLowerCase() === product.name.toLowerCase()
    );

    if (matchedProduct && matchedProduct.default_price) {
      stripeProducts.push({
        price: matchedProduct.default_price,
        quantity: product.quantity,

      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeProducts,
    mode: "payment",
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/`,
  });

  return NextResponse.json({
    url: session.url,
  });
};
