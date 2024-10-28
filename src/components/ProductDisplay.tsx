"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { urlFor } from '@/sanity/lib/image';
import AddToCartBtn from './AddToCartBtn';
import { useStore } from '@/app/useStore';
import { useMemo } from 'react';
function ProductDisplay({products} : {products:any}) {


    const searchTerm = useStore(state => state.searchTerm);

    const filteredProducts = useMemo(() => {
      return products.filter((product: any) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [products, searchTerm]);
  
    if (!products.length) return <div>No products available</div>;

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {filteredProducts.map((product : any) => (
        <Link
          href={`/${product.slug.current}`}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={urlFor(product.images[1]).url()}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
            />
            {product.images && (
              <Image
                src={urlFor(product.images[0]).url()}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price}</span>
          </div>
          
         <AddToCartBtn product={product} />
        </Link>
      ))}
    </div>
  );
}

export default ProductDisplay;
