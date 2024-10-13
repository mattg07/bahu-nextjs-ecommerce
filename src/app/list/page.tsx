import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import Image from 'next/image'
import React from 'react'
function List() {
  return (
    <div className='px-4 md:px-8 lg:px-144 xl:px-30 2xl:px-58'>
    <div className="hidden  bg-pink-50 px-4 sm:flex justify-between h-72">
      <div className="w-2/3 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
          Grab up to 50% off on
          <br /> Selected Products
        </h1>
        <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
          Buy Now
        </button>
      </div>
      <div className="relative w-1/3">
        <Image src="https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="object-contain" />
      </div>
    </div>
    <Filter />
    <ProductList/>
  </div>
  )
}

export default List