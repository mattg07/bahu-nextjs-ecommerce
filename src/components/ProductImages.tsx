"use client";

import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ items }: { items: string[] }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index]}
          alt={`Product Image ${index + 1}`}
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item, i) => (
          <div
            className="w-1/4 h-32 relative cursor-pointer"
            key={i}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item}
              alt={`Thumbnail ${i + 1}`}
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
