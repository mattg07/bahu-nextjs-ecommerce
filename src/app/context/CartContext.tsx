"use client";
import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }: any) => {
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalQty, setTotalQty] = useState<number>(0);
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
    setTotalQty((prev) => prev+quantity);
    const isInCart = cartItems.find((item: any) =>item._id === product._id)  

    if (isInCart) {
      const updatedCartItems = cartItems.map((cartProduct:any) => {
        if(cartProduct._id === product._id)
          return {
        ...cartProduct,
      quantity: cartProduct.quantity + quantity}
      })
      setCartItems(updatedCartItems)
    }
    else{
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
      console.log("Updated cart items:", cartItems);
    }
    setQty(1)
    alert("product added to cart")


  };
  const totalPrice = {
    
  }

  return (
    <CartContext.Provider value={{ showCart, setShowCart, qty, incQty, decQty, cartItems, addProduct, totalQty }}>
      <div>{children}</div>
    </CartContext.Provider>
  );
};
