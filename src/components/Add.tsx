import React from 'react'

function Add() {
  return (
    <div className='flex *:px-3 font-semibold w-[158px] rounded-md items-center border border-black'>
        <span className='plus font-semibold text-2xl'>-</span>
        <h3>Quantity</h3>
        <span className='minus font-semibold text-2xl'>+</span>
    </div>
  )
}

export default Add