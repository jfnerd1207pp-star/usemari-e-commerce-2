import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  { id: 1, name: 'Trench Coat Classic', price: 489.90, image: product1, category: 'Vestuário' },
  { id: 2, name: 'Bolsa Leather Tote', price: 359.90, image: product2, category: 'Acessórios' },
  { id: 3, name: 'Sneaker Essential', price: 279.90, image: product3, category: 'Calçados' },
  { id: 4, name: 'Relógio Gold Edition', price: 899.90, image: product4, category: 'Acessórios' },
  { id: 5, name: 'Lenço Silk Premium', price: 189.90, image: product5, category: 'Acessórios' },
  { id: 6, name: 'Óculos Aviator Gold', price: 329.90, image: product6, category: 'Acessórios' },
];
