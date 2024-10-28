"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CartContext } from "@/app/context/CartContext";
import { useContext } from "react";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/app/types/types";
function CartModal() {
  interface ProductsToSend {
    name: string;
    price: number;
    images: string[];
    quantity: number;
  }
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }
  
  const { cartItems, totalPrice} = cartContext;
  console.log(cartItems);

  const handleCheckout = async () => {
    const productsToSend: ProductsToSend[] = cartItems.map((product: Product) => ({
      name: product.name,
      price: product.price,
      images: product.images.map((image) => image.url),
      quantity: product.quantity,
    }));
  
    try {
      const response = await fetch("http://localhost:3000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application-json" },
        body: JSON.stringify({ products: productsToSend }),
      });
      const data = await response.json();
      if(data.url){
        window.location.href = data.url
      }
    } catch (error) {
      console.log("Error during checkout", error);
      throw error;
    }
  };

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20 ">
      {!cartItems || cartItems.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <>
          {cartItems.map((product: any, index: number) => (
            <div key={index} className="text-black flex flex-col ">
              <h1 className="overflow-hidden h-8">
                <div className="flex flex-row items-center ">
                  {product.name}
                  <h1 className="text-sm ml-2 opacity-60">{product.price}$</h1>
                </div>
              </h1>
              <div className="flex  flex-row justify-between">
                <Image
                  alt="product"
                  width={90}
                  height={95}
                  src={urlFor(product.images[1]).url()}
                />
                <div className="flex flex-col ">
                  <div className="flex flex-row justify-around">
                    <h1 className="mr-2">Quantity:</h1>
                    <h1>{product.quantity}</h1>
                  </div>
                  <h1>${product.quantity * product.price}</h1>
                </div>
              </div>
            </div>
          ))}

          <div className="flex gap-4"></div>

          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>{totalPrice}</span>
            </div>
            <p className="text-sm text-gray-500 mt-2 mb-2">
              Shipping and taxes are calculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <Link href="/cart">
                <button className="rounded-sm py-3 px-4 ring-1 ring-gray-300">
                  View Cart
                </button>
              </Link>
              <button
                onClick={handleCheckout}
                className="rounded-sm py-3 px-4 bg-black text-white ring-1 ring-gray-300"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartModal;
