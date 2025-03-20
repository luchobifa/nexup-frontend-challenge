import { useState, useEffect } from 'react';
import { Product } from '../models/types';
import { getProductList } from '../api/products';
import { searchProducts } from '../utils/search';

interface UseProductsReturn {
  products: Product[];
  filteredProducts: Product[];
  isLoading: boolean;
  error: string | null;
  filters: {
    category: string;
    setCategory: (category: string) => void;
    setSearch: (query: string) => void;
  };
}

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredByCategory =
    selectedCategory === 'Todos'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const filteredProducts = searchProducts(filteredByCategory, searchQuery);

  return {
    products,
    filteredProducts,
    isLoading,
    error,
    filters: {
      category: selectedCategory,
      setCategory: setSelectedCategory,
      setSearch: setSearchQuery,
    },
  };
};
