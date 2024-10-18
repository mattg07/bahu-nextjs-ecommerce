"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import CartModal from "./CartModal";
import { CartContext } from "@/app/context/CartContext";

function NavIcons({}) {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const router = useRouter();
  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };
  const {qty, cartItems, totalQty}:any = useContext(CartContext)
  return (
    <div className="flex items-center justify-between gap-4 xl:gap-6 relative">
      <Image
        className="cursor-pointer"
        src="/profile.png"
        width={20}
        height={20}
        alt="profile"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute rounded-md top-12 lef-0 text-sm z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout </div>
        </div>
      )}
      <Image
        className="cursor-pointer"
        src="/notification.png"
        width={20}
        height={20}
        alt="notification"
      />
      <div className="relative cursor-pointer">
        <Image
          className="cursor-pointer"
          src="/cart.png"
          width={20}
          height={20}
          alt="cart"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-baku rounded-full text-white text-sm flex items-center justify-center">{totalQty}</div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
}

export default NavIcons;
