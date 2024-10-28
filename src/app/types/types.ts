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
    _id: string;
    name: string;
    slug: {
      current: string;
    };
    description: string;
    price: number;
    images: { _key: string; url: string }[]; // Assumes each image has a unique _key and a URL
    categories: Category[]; // Array of Category objects
    additionalInfoSections?: AdditionalInfoSection[]; // Optional array of additional info sections
  }
  