import React, { useState, useEffect } from 'react';
import { ProductList } from '../ProductList/ProductList';
import { CategoryFilter } from '../CategoryFilter/CategoryFilter';
import { categories } from '../../models/mockData';
import { getProductList } from '../../api/products';
import { Product } from '../../models/types';
import './ProductManager.css';

export const ProductManager: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const data = await getProductList();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === 'Todos'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="product-manager">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      {isLoading ? (
        <div className="loading">Loading products...</div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};
