import { Product } from '../models/types';

export const searchProducts = (
  products: Product[],
  query: string,
): Product[] => {
  if (!query.trim()) return products;

  const searchTerm = query.toLowerCase().trim();

  return products.filter((product) => {
    const searchableFields = [product.name, product.category];

    return searchableFields.some((field) =>
      field.toLowerCase().includes(searchTerm),
    );
  });
};
