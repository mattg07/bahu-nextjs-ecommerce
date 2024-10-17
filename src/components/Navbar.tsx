
import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import Image from "next/image";
import { baronNeue } from "@/app/layout";
import { Nunito_Sans} from 'next/font/google'
const nunitoSans = Nunito_Sans({
  weight: [ '500'],
  subsets: ['latin'],
});
function Navbar() {
  
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-58 relative">
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href={"/"} className="flex items-center gap-2">
          <h1 className={`text-3xl text-orange-500 ${baronNeue.className}`}>
            BAHU
          </h1>
        </Link>
        <Menu />
      </div>
      <div className="hidden md:flex items-center justify-between gap-10 h-full">
        <div className="w-1/1 flex items-center gap-12">
          <Link className="flex items-center justify-center" href="/">
            {" "}
            <h1
             className={`text-4xl mb-3 text-orange-500 ${baronNeue.className}`}
            >
              BAHU
            </h1>
          </Link>
          <div className={`hidden xl:flex gap-6 ${nunitoSans.className}`}>
          <Link  href={"/list/"}> Shop</Link>
          <Link href={"/tamo"}> Deals</Link>
          <Link href={"/tamo"}> About</Link>
          <Link href={"/tamo"}> Contact</Link>
          <Link href={"/tamo"}> Logout</Link>
        </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
