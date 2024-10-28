"use client";
import React from 'react'
import { useContext } from 'react';
import { CartContext } from '@/app/context/CartContext';
import { Product } from '@/app/types/types';

function AddToCartBtn({product} : {product:Product}) {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }
  
  const {  addProduct } = cartContext;
  return (
    <button 
    onClick={() => addProduct(product, 1)}
className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-blue-300">
 Add to Cart
</button>  )
}

export default AddToCartBtn