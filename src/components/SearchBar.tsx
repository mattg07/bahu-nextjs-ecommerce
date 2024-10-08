"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function SearchBar() {
    const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if(name){
        router.push(`/list?name=${name}`)
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex ic justify-between gap-4 bg-gray-200 p-2 rounded-md flex-1"
    >
      <input
        type="text"
        name="name"
        className="flex-1 bg-transparent outline-none"
        placeholder="Search"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" width={16} height={16} alt="search" />
      </button>
    </form>
  );
}

export default SearchBar;
