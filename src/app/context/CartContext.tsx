"use client";
import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }: any) => {
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);
  return (
    <CartContext.Provider value={{ showCart, setShowCart, qty }}>
      <div>{children}</div>
    </CartContext.Provider>
  );
};
