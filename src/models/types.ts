export enum ProductStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DISCONTINUED = 'discontinued',
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  status: ProductStatus;
  stock?: number;
}
