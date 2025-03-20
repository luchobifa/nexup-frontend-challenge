import React from 'react';

import { formatPrice } from '../../utils/price';
import './ProductCard.css';
import { Product } from '../../models/Product';
import { ProductStatus } from '../../models/ProductStatus';

interface ProductCardProps {
  product: Product;
}

const getStatusColor = (status: ProductStatus): string => {
  switch (status) {
    case ProductStatus.Active:
      return '#28a745';
    case ProductStatus.Inactive:
      return '#dc3545';
    default:
      return '#6c757d';
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
        <p
          className={`product-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}
        >
          {product.stock ? `In Stock (${product.stock})` : 'Out of Stock'}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
