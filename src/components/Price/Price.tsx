import React from 'react';
import { formatPrice } from '../../utils/price';

type Props = {
  price: number;
};

const Price: React.FC<Props> = ({ price }: Props) => {
  return <p className="product-price">{formatPrice(price)}</p>;
};

export default Price;
