// utils/fetchProducts.ts
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export const fetchProducts = async () => {
  try {
    const query = groq`*[_type == "product"]`;

    const products = await client.fetch(query, {}, { next: { revalidate: 36000 } });

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
