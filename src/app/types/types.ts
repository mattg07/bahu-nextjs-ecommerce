export interface Category {
    _id: string;
    name: string;
    images: string;
  }
  
  export interface AdditionalInfoSection {
    title: string;
    description: string;
  }
  
  export interface Product {
    filter(arg0: (product: Product) => boolean): number;
    length: number;
    _id: string;
    name: string;
    slug: {
      current: string;
    };
    description: string;
    quantity: number;
    price: number;
    images: { _key: string; url: string }[];
    categories: Category[]; 
    additionalInfoSections?: AdditionalInfoSection[]; 
  }

  export interface Product extends Omit<CartItem, 'quantity'> {}
  
  export interface CartContextType {
    totalPrice: number;
    showCart: boolean;
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
    qty: number;
    incQty: () => void;
    decQty: () => void;
    cartItems: CartItem[];
    addProduct: (product: Product, quantity: number) => void;
    totalQty: number;
  }
  export interface CartItem {
    _id: string;
    price: number;
    quantity: number;
    categories: Category[]; 
    images: { _key: string; url: string }[]; 
    name: string;
    slug: {
      current: string;
    };
    description: string;
  }