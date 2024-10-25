
import ProductDisplay from "./ProductDisplay";
import { fetchProducts } from '@/app/utils/fetchProducts';  // Import the utility function

const ProductList = async () => {
  const products = await fetchProducts();

  return (
    <ProductDisplay products={products} />
  );
};

export default ProductList;
