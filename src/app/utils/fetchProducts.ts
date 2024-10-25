// utils/fetchProducts.ts
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export const fetchProducts = async () => {
  try {
    // Define your GROQ query for fetching products
    const query = groq`*[_type == "product"]`;

    // Fetch the products using the Sanity client
    const products = await client.fetch(query, {}, { next: { revalidate: 36000 } });

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
