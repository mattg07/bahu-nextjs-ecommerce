import React, { useContext } from 'react'
import { CartItem } from "@/app/types/types";
import { CartContext } from '@/app/context/CartContext';
interface ProductsToSend {
    name: string;
    price: number;
    images: string[];
    quantity: number;
  }
function CheckoutBtn() {
    const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { cartItems } = cartContext;
    const handleCheckout = async () => {
        const productsToSend: ProductsToSend[] = cartItems.map(
          (product: CartItem) => ({
            name: product.name,
            price: product.price,
            images: product.images.map((image) => image.url),
            quantity: product.quantity,
          })
        );
    
        try {
          const response = await fetch("/api/checkout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": "true",
            },
            body: JSON.stringify({ products: productsToSend }),
          });
          const data = await response.json();
          if (data.url) {
            window.location.href = data.url;
          }
        } catch (error) {
          console.log("Error during checkout", error);
          throw error;
        }
      };
    
  return (
    <button
    onClick={handleCheckout}
    className="rounded-sm py-3 px-4 bg-black text-white ring-1 ring-gray-300"
  >
    Checkout
  </button>  )
}

export default CheckoutBtn