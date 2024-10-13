"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/18880644/pexels-photo-18880644/free-photo-of-clothes-on-wooden-hangers-on-a-rack.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-100",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/7679666/pexels-photo-7679666.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-pink-100 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/26834024/pexels-photo-26834024/free-photo-of-clothes-hanging-on-coathangers.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-100 to-yellow-50",
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {" "}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl text-gray-800 lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>{" "}
              <h1 className="text-4xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href="/">
                {" "}
                <button>Shop Now</button>
              </Link>
            </div>
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                fill
                sizes="100%"
                alt="hero"
                className="object-cover"
              />{" "}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8  flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className=" w-[5px] h-[5px] bg-gray-600 rounded-full"> </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
