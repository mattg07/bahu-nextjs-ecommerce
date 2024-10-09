import React from 'react';
import Image from "next/image";
import Link from "next/link";

const res = {
  "items": [
    {
      "_id": "1",
      "name": "Modern Chair",
      "slug": "modern-chair",
      "price": { "price": 120 },
      "media": {
        "mainMedia": {
          "image": {
            "url": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
          }
        },
        "items": [
          {
            "image": {
              "url": "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg"
            }
          },
          {
            "image": {
              "url": "https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg"
            }
          }
        ]
      }
    },
    {
      "_id": "2",
      "name": "Stylish Sofa",
      "slug": "stylish-sofa",
      "price": { "price": 300 },
      "media": {
        "mainMedia": {
          "image": {
            "url": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
          }
        },
        "items": [
          {
            "image": {
              "url": "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg"
            }
          },
          {
            "image": {
              "url": "https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg"
            }
          }
        ]
      }
    },
    {
      "_id": "3",
      "name": "Elegant Lamp",
      "slug": "elegant-lamp",
      "price": { "price": 80 },
      "media": {
        "mainMedia": {
          "image": {
            "url": "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg"
          }
        },
        "items": [
          {
            "image": {
              "url": "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg"
            }
          },
          {
            "image": {
              "url": "https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg"
            }
          }
        ]
      }
    },
    {
      "_id": "4",
      "name": "Wooden Table",
      "slug": "wooden-table",
      "price": { "price": 150 },
      "media": {
        "mainMedia": {
          "image": {
            "url": "https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg"
          }
        },
        "items": [
          {
            "image": {
              "url": "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg"
            }
          },
          {
            "image": {
              "url": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
            }
          }
        ]
      }
    }
  ]
};

function ProductList() {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price?.price}</span>
          </div>
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
