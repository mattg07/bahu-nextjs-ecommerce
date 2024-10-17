"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CartContext } from "@/app/context/CartContext";
import { useContext } from "react";
function CartModal() {

  const {showCart, setShowCart}:any = useContext(CartContext)

  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20 ">
      {!cartItems ? (
        <div>Cart is empty </div>
      ) : (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex gap-4">
            <Image src="/pexels.jpg" width={72} height={96} alt="product" />
            <div className="flex flex-col justify-between w-full">
              <div className=" flex items-center justify-between gap-8">
                <h3 className="font-semibold">Product Name</h3>
                <div className="p-1 bg-gray-50 rounded-sm">49S</div>
              </div>
              <div className="text-sm  text-gray-500">available</div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty .2</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>49</span>
            </div>
            <p className="text-sm text-gray-500 mt-2 mb-2">
              {" "}
        Shipping and taxes are calculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <Link href="/cart">
              <button className="rounded-sm py-3 px-4 ring-1 ring-gray-300">View Cart</button>
              </Link>
              <button className="rounded-sm py-3 px-4 bg-black text-white ring-1 ring-gray-300">Checkout</button>
            </div>
          </div>
          
        </>
      )}
    </div>
  );
}

export default CartModal;
