import { NextResponse } from "next/server";
interface StripeProduct {
  id: string;
  name: string; 
  default_price: string ;
  quantity: number;
}

export const POST = async (request: Request) => {
  const stripeModule = await import("stripe");
  const stripe = new stripeModule.default(process.env.STRIPE_SECRET_KEY!);

  const { products } = await request.json();
  let activeProducts = await stripe.products.list({ active: true });

  try {
    for (const product of products) {
      const matchedProduct = activeProducts?.data.find(
        (stripeProduct) => stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      if (!matchedProduct) {
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
      (stripeProduct) =>
        stripeProduct.name.toLowerCase() === product.name.toLowerCase()
    );

    if (matchedProduct && matchedProduct.default_price) {
      stripeProducts.push({
        id: matchedProduct.id, 
        name: matchedProduct.name, 
        default_price: matchedProduct.default_price as string, 
        quantity: product.quantity ?? 1,

      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeProducts.map((product) => ({
      price: product.default_price, 
      quantity: product.quantity, 
    })),
    mode: "payment",
    success_url: `https://bahu-nextjs-ecommerce-fanu.vercel.app/success`,
    cancel_url: `https://bahu-nextjs-ecommerce-fanu.vercel.app/`,
  });

  return NextResponse.json({
    url: session.url,
  });
};
