import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const POST = async (request: any) => {
  const { products } = request.json();
  let activeProducts = await stripe.products.list({ active: true });

  try {
    for (const product of products) {
      const matchedProducts = activeProducts?.find(
        (stripeProduct: any) =>
          stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      if (matchedProducts == undefined) {
        const prod = await stripe.products.create({
          name: product.name,
          default_price_data: {
            currency: "usd",
            unit_amount: product.price * 100,
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
 
  activeProducts = await stripe.products.list({ active: true });
  
  let stripeProducts: never[] = []
  for (const product of products) {
    const stripeProducts = activeProducts?.find(
      (stripeProduct: any) =>
        stripeProduct.name.toLowerCase() === product.name.toLowerCase()
    );

   if(stripeProducts){
    stripeProducts.push(
        {
            price: stripe?.default_price,
            quantity: product.quantity,
        },
    
    )
   }
  }



  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    line_items:stripeProducts,
    mode: "payment",
    success_url: ``,
    cancel_url: ``,
  });

  return NextResponse.json({
    data: "Hello World",
  });
};
