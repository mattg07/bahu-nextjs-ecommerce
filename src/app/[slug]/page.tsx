import React from "react";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ProductImages from "@/components/ProductImages";
import Add from "@/components/Add";
import { Category } from "../types/types";
import { Metadata } from "next";

type Props = {
  params: {slug : string};

}
export async function generateMetadata(
  { params}: Props,
): Promise<Metadata> {

  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      ...,
      categories[]-> {
        name
      }
    }`,
    { slug: params.slug }, { next: { revalidate: 3000 } }
  );
  
  if (!product) {
    return {title:"", description: ""}
  }

 

  return {
    title: product.name,
    description: product.description,
    openGraph: {
    },
  }
}
async function Page({ params }: Props ) {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      ...,
      categories[]-> {
        name
      }
    }`,
    { slug: params.slug }, { next: { revalidate: 3000 } }
  );

  if (!product) {
    notFound();
  }

  const imageUrls = product.images.map((image: string) => urlFor(image).url());

 



  return (
    <div className="border border-white py-2 bg-gray-50 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <div key={product._id} className="flex flex-col lg:flex-row gap-16">
        {/* IMG */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages items={imageUrls} />
        </div>
        {/* TEXTS */}
        <div className="w-full pl-12 lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-medium">{product.name}</h1>
          <p className="text-gray-900">{product.description}</p>
          <div className="flex flex-col gap-2">
            <h2 className="font-medium text-2xl">${product.price}</h2>
            <h4 className="text-gray-500">
              Tax included. <br /> Shipping calculated at checkout.
            </h4>
          </div>
          {/* Display category names */}
          <div className="text-gray-700">
            {product.categories.map((category: Category, i:number) => (
              <span key={i} className="mr-2">
                <h2>Category: {category.name}</h2>
              </span>
            ))}
          </div>

          <div className="h-[2px] bg-gray-100" />
          <div className="flex flex-col">
            <Add product={product} />
          </div>
          <div className="h-[2px] bg-gray-100" />
        
          <div className="h-[2px] bg-gray-100" />
          {/* REVIEWS */}
          <h1 className="text-2xl">User Reviews</h1>
          <Suspense fallback="Loading...">
            {/* Add Reviews component here */}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Page;
