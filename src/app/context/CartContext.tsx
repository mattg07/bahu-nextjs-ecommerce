"use client";
import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }: any) => {
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const addProduct = (product: any, quantity: number) => {
    setCartItems([...cartItems, { ...product, quantity }]);
    console.log("Product added:", { ...product, quantity });
    console.log("Updated cart items:", cartItems);
  };

  return (
    <CartContext.Provider value={{ showCart, setShowCart, qty, incQty, decQty, cartItems, addProduct }}>
      <div>{children}</div>
    </CartContext.Provider>
  );
};
