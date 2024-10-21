"use client";
import React from 'react'
import { useContext } from 'react';
import { CartContext } from '@/app/context/CartContext';

function AddToCartBtn({product} : {product:any}) {
    const {cartItems, addProduct, qty, incQty, decQty}:any = useContext(CartContext)

  return (
    <button 
    onClick={() => addProduct(product, 1)}
className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-blue-300">
 Add to Cart
</button>  )
}

export default AddToCartBtn