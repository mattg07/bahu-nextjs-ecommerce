"use client";
import React from 'react'
import { CartContext } from '@/app/context/CartContext'
import { useContext } from 'react'
import { Product } from '@/app/types/types';
function Add({product} : {product:Product}) {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }
  
  const { addProduct, qty, incQty, decQty } = cartContext;

  return (
    <div className=''>
       <h1>
         Quantity
        </h1>
    <div className='flex *:px-3 font-semibold w-28 h-8 mt-2 justify-between rounded-md items-center border border-black'>
        <span
        onClick={decQty}
        className='cursor-pointer minus font-semibold text-2xl'>-</span>
        <h1>{qty}</h1>
        <span
        onClick={incQty}
        className='cursor-pointer plus font-semibold text-2xl'>+</span>
    </div>
    <button
        onClick={() => addProduct(product, qty)}
        className=" self-center mt-8 rounded-md bg-orange-500/80 w-72 overflow-hidden h-10">Add to cart</button>
    </div>
  )
}

export default Add