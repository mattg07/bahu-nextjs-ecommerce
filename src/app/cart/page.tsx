"use client";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { urlFor } from "@/sanity/lib/image";

import Image from "next/image";
import Link from "next/link";
import { CartContextType, CartItem} from "../types/types";
function Cart() {
  const { totalPrice, cartItems } = useContext(CartContext) as CartContextType;

  return (
    <div className="border flex items-center justify-center py-5">
      <div className=" w-4/5">
        <div className="flex flex-row justify-between py-6">
          <h2 className={`text-xl `}>Your cart</h2>
         <Link href="/list">
         
          <h2 className="text-large">Continue Shopping</h2>
         </Link>
        </div>
        <hr className="h-0.5 opacity-30 bg-orange-500" />
        <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Product</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Quantity</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product:CartItem, index:number) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-gray-200">
                <div className="flex items-center">
                  <Image
                    width={80}
                    height={80}
                    alt="product img"
                    src={urlFor(product.images[1]).url()}
                  />
                  <span className="ml-4">{product.name}</span>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-gray-200">{product.quantity}</td>
              <td className="py-2 px-4 border-b border-gray-200">{product.price}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td className="font-semibold">Subtotal:</td>
            <td className="py-2 px-4 font-semibold">
                {totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </td>          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Cart;
