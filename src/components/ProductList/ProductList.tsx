import React from 'react';
import { Product } from '../../models/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (products.length === 0) {
    return <div className="no-products">No products found</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
