import { Product } from './Product';
import { ProductCategory } from './ProductCategory';
import { ProductStatus } from './ProductStatus';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Fresh Apples',
    status: ProductStatus.Active,
    category: ProductCategory.Fruit,
    price: 2.99,
    stock: 15,
  },
  {
    id: 2,
    name: 'Organic Bananas',
    status: ProductStatus.Active,
    category: ProductCategory.Fruit,
    price: 1.99,
    stock: 0,
  },
  {
    id: 3,
    name: 'Carrots',
    status: ProductStatus.Active,
    category: ProductCategory.Vegetables,
    price: 1.49,
    stock: 25,
  },
  {
    id: 4,
    name: 'Broccoli',
    status: ProductStatus.Inactive,
    category: ProductCategory.Vegetables,
    price: 2.49,
    stock: 0,
  },
  {
    id: 5,
    name: 'Chicken Breast',
    status: ProductStatus.Active,
    category: ProductCategory.Meat,
    price: 8.99,
    stock: 10,
  },
  {
    id: 6,
    name: 'Ground Beef',
    status: ProductStatus.Inactive,
    category: ProductCategory.Meat,
    price: 6.99,
    stock: 0,
  },
];

export const categories = ['Todos', ...Object.values(ProductCategory)];
