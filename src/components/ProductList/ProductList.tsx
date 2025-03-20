import React from 'react';
import { Product } from '../../models/types';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
