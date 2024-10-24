import Link from "next/link";
import React from "react";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
async function CategoryList() {
  const categories = await client.fetch(groq`*[_type == "category"]{name, images}`, {}, { next: {revalidate: 10}});
  console.log(categories);
  
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide mt-8">
      <div className="flex gap-4 md:gap-8">
        {categories.map((category : any, index: number) => (
          <Link
            key={index}
            href={`/${category.name.toLowerCase()}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          >
            <div className="relative bg-slate-100 w-full h-48 sm:h-64 lg:h-80 xl:h-96">
              <Image
                src={urlFor(category.images[0]).url()}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">
              {category.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
