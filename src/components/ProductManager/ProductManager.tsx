import React from 'react';
import { ProductList } from '../ProductList/ProductList';
import { CategoryFilter } from '../CategoryFilter/CategoryFilter';
import { SearchInput } from '../SearchInput/SearchInput';
import { categories } from '../../models/mockData';
import { useProducts } from '../../hooks/useProducts';
import './ProductManager.css';
import { StockFilter } from '../StockFilter/StockFilter';

export const ProductManager: React.FC = () => {
  const {
    isLoading,
    error,
    filteredProducts,
    filters: {
      category,
      setCategory,
      setSearch,
      showOnlyInStock,
      setShowOnlyInStock,
    },
  } = useProducts();

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="product-manager">
      <div className="filters-container">
        <SearchInput onSearch={setSearch} />
        <CategoryFilter
          categories={categories}
          selectedCategory={category}
          onCategoryChange={setCategory}
        />
        <StockFilter
          showOnlyInStock={showOnlyInStock}
          onToggle={setShowOnlyInStock}
        />
      </div>
      {isLoading ? (
        <div className="loading">Loading products...</div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};
