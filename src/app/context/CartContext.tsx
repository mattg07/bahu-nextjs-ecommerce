"use client";
import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }: any) => {
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty +1)
  }

  const decQty = () => {
    setQty((prevQty) =>{
      if(prevQty -1 < 1 ) return 1;
      return prevQty -1
    })
  }

  return (
    <CartContext.Provider value={{ showCart, setShowCart, qty, incQty, decQty }}>
      <div>{children}</div>
    </CartContext.Provider>
  );
};
