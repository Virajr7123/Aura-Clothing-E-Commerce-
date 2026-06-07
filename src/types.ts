export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  span?: string;
}
