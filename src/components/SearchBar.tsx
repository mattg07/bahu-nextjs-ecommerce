"use client";
import Image from "next/image";
import { useStore } from '@/app/useStore';
import React from "react";

function SearchBar( ) {
  const setSearchTerm = useStore((state) => state.setSearchTerm);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };


  return (
    <form
      className="flex ic justify-between gap-4 bg-gray-200 p-2 rounded-md flex-1"
    >
      <input
        type="text"
        name="name"
        className="flex-1 bg-transparent outline-none"
        placeholder="Search"
        onChange={handleChange}
      />
      <button className="cursor-pointer">
        <Image src="/search.png" width={16} height={16} alt="search" />
      </button>
    </form>
  );
}

export default SearchBar;
