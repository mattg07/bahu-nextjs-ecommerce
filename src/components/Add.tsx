"use client";
import { div } from 'framer-motion/client'
import React from 'react'
import { CartContext } from '@/app/context/CartContext'
import { useContext } from 'react'
function Add() {
const {qty, incQty, decQty}:any = useContext(CartContext)




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
    </div>
  )
}

export default Add