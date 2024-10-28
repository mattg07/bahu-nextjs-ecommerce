import { client } from "@/sanity/lib/client";
import { PackageSearch, Frown } from "lucide-react";
import React from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
async function SingleCategory({
  params,
}: {
  params: { categoryName: string };
}) {
  const { categoryName } = params;

  const products = await client.fetch(
    `*[_type == "product"]{
      _id,
      name,
      slug {
        current
      },
      images,
      categories[]-> {
        name
      }
    }`
  );

  console.log("Fetched products:", products);

  const filteredProducts = products.filter((product: any) =>
    product.categories.some(
      (cat: any) => cat.name.toLowerCase() === categoryName.toLowerCase()
    )
  );

  console.log("Filtered products:", filteredProducts);

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-4">
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </h1>
      <div></div>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product: any) => (
            <Link href={`/${product.slug.current}`} key={product._id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <Image
                  src={urlFor(product.images[0]).url()}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p>
                    Categories:{" "}
                    {product.categories.map((cat: any) => cat.name).join(", ")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="px-5">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full  bg-gray-100 flex items-center justify-center">
            <PackageSearch className="h-10 w-10 text-gray-400" />
          </div>
          <div className="text-2xl font-bold flex flex-row gap-2 items-center">
            No Products Found <Frown />
          </div>
          <div>
            <p className="text-muted-foreground mb-4">
              We couldn't find any products in this category. This might be
              because:
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside mb-4">
              <li>The category is currently empty</li>
              <li>All products in this category are out of stock</li>
              <li>
                There might be a filter applied that's excluding all products
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleCategory;
