import { Product, ProductStatus } from './types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Laptop Pro X',
    category: 'Electronics',
    price: 1299,
    status: ProductStatus.ACTIVE,
    stock: 15,
  },
  {
    id: '2',
    name: 'Wireless Mouse',
    category: 'Electronics',
    price: 30,
    status: ProductStatus.ACTIVE,
    stock: 50,
  },
  {
    id: '3',
    name: 'Desk Chair',
    category: 'Furniture',
    price: 199,
    status: ProductStatus.DISCONTINUED,
    stock: 8,
  },
  {
    id: '4',
    name: 'Coffee Table',
    category: 'Furniture',
    price: 299,
    status: ProductStatus.INACTIVE,
    stock: 0,
  },
  {
    id: '5',
    name: 'Smart Watch',
    category: 'Electronics',
    price: 199,
    status: ProductStatus.ACTIVE,
    stock: 25,
  },
];

export const categories = ['Todos', 'Electronics', 'Furniture'];
