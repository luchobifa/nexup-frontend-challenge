import React from 'react';
import { Product, ProductStatus } from '../../models/types';
import { formatPrice } from '../../utils/price';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getStatusColor = (status: ProductStatus): string => {
    switch (status) {
      case ProductStatus.ACTIVE:
        return '#28a745';
      case ProductStatus.INACTIVE:
        return '#dc3545';
      case ProductStatus.DISCONTINUED:
        return '#6c757d';
      default:
        return '#6c757d';
    }
  };

  return (
    <div className="product-card">
      <div
        className="status-indicator"
        style={{ backgroundColor: getStatusColor(product.status) }}
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">{formatPrice(product.price)}</p>
        {product.stock !== undefined && (
          <p className="product-stock">Stock: {product.stock}</p>
        )}
      </div>
    </div>
  );
};
