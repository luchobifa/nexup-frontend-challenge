import { useState, useEffect } from 'react';
import { Product } from '../models/Product';
import { searchProducts } from '../utils/search';
import { getProductList } from '../api/products';

interface UseProductsReturn {
  products: Product[];
  filteredProducts: Product[];
  isLoading: boolean;
  error: string | null;
  filters: {
    category: string;
    setCategory: (category: string) => void;
    setSearch: (query: string) => void;
    showOnlyInStock: boolean;
    setShowOnlyInStock: (show: boolean) => void;
  };
}

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

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

  const filteredByStock = showOnlyInStock
    ? filteredByCategory.filter((product) => product.stock > 0)
    : filteredByCategory;

  const filteredProducts = searchProducts(filteredByStock, searchQuery);

  return {
    products,
    filteredProducts,
    isLoading,
    error,
    filters: {
      category: selectedCategory,
      setCategory: setSelectedCategory,
      setSearch: setSearchQuery,
      showOnlyInStock,
      setShowOnlyInStock,
    },
  };
};
