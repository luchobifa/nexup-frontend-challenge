import { mockProducts } from '../models/mockData';
import { Product } from '../models/Product';

const delay = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

export const getProductList = async (): Promise<Product[]> => {
  await delay(1000);
  return mockProducts;
};
