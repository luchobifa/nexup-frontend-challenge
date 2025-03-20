import { Product } from '../models/types';
import { mockProducts } from '../models/mockData';

const delay = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

export const getProductList = async (): Promise<Product[]> => {
  await delay(1000);
  return mockProducts;
};
