import React from 'react';
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Image from 'next/image';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

async function Page({params} : {params :{slug: string}}) {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {..., categories[]-> {name}}   `,
    { slug: params.slug },
  );

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
        <div key={product._id} className="flex flex-col lg:flex-row gap-16">
          {/* IMG */}
          <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          {product.images && product.images[0] && (
              <Image
                src={urlFor(product.images[1]).url()}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-auto"
              />
            )}
          </div>
          {/* TEXTS */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl font-medium">{product.name}</h1>
            <p className="text-gray-700 ">{product.description}</p>
            <div className="text-gray-700">
          {product.categories.map((category: any) => (
            <span key={category._id} className="mr-2">
              {category.name}
            </span>
          ))}
        </div>
            <div className="h-[2px] bg-gray-100" />
              <div className="flex items-center gap-4">
                <h2 className="font-medium text-2xl">
                  ${product.price}
                </h2>
              </div>
            
            <div className="h-[2px] bg-gray-100" />
            {product.additionalInfoSections?.map((section: any) => (
              <div className="text-sm" key={section.title}>
                <h4 className="font-medium mb-4">{section.title}</h4>
                <p>{section.description}</p>
              </div>
            ))}
            <div className="h-[2px] bg-gray-100" />
            {/* <Suspense fallback="Loading...">
            </Suspense> */}
          </div>
        </div>
    </div>
  );
};

export default Page;
