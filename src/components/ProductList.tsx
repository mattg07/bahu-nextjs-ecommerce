"use client";
import React, { useEffect, useMemo } from 'react';
import Image from "next/image";
import Link from "next/link";
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';
import AddToCartBtn from './AddToCartBtn';
import { useStore } from '@/app/useStore';

const ProductList = () => {
  //Zustand store 
  const searchTerm = useStore(state => state.searchTerm);
  
  const [products, setProducts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await client.fetch(groq`*[_type == "product"]`, {}, { next: { revalidate: 36000 } });
      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  // MEMOIZING. 
  const filteredProduct = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {filteredProduct.map((product) => (
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
};

export default ProductList;
