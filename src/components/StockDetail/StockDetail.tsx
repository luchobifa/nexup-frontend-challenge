import React from 'react';

type StockDetailProps = {
  stock: number;
};

export const StockDetail: React.FC<StockDetailProps> = ({ stock }) => (
  <p className={`product-stock ${stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
    {stock ? `In Stock (${stock})` : 'Out of Stock'}
  </p>
);
