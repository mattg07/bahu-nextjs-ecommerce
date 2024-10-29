"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavIcons from "./NavIcons";

function Menu() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-row gap-6">
      <NavIcons/>
      <Image
        src="/menu.png"
        alt="menu"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (<div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
      <Link href="/list"> Shop</Link>
      <Link href="/cart">Cart</Link>
      <Link href="/about"> About</Link>
      <Link href="/contact"> Contact</Link>
      <Link href="/login"> Sign In</Link>
         </div>)}
    </div>
  );
}

export default Menu;
