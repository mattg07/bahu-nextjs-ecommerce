"use client";
import { createContext, useState, ReactNode } from "react";
import { CartItem, Product, CartContextType } from "../types/types";

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalQty, setTotalQty] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const incQty = () => setQty((prevQty) => prevQty + 1);
  const decQty = () => setQty((prevQty) => (prevQty - 1 < 1 ? 1 : prevQty - 1));

  const addProduct = (product: Product, quantity: number) => {
    setTotalQty((prev) => prev + quantity);
    const isInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);

    if (isInCart) {
      const updatedCartItems = cartItems.map((cartProduct) =>
        cartProduct._id === product._id
          ? { ...cartProduct, quantity: cartProduct.quantity + quantity }
          : cartProduct
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }

    setQty(1);
  };

  return (
    <CartContext.Provider
      value={{
        totalPrice,
        showCart,
        setShowCart,
        qty,
        incQty,
        decQty,
        cartItems,
        addProduct,
        totalQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
