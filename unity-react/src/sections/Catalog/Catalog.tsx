import { useEffect, useState } from 'react';
import { ICardProps } from '../../components/Card/types';
import { Products } from '../../components/Products/Products';
import { useProducts } from '../../hooks/products-hook';

export const Catalog = () => {
  const [womenProducts, setWomenProducts] = useState<ICardProps[]>([]);
  const [menProducts, setMenProducts] = useState<ICardProps[]>([]);

  useEffect(() => {
    async function FetchData() {
      const response1 = await useProducts('women', 4);
      const response2 = await useProducts('men', 4);
      setWomenProducts(response1);
      setMenProducts(response2);
    }
    FetchData();
  }, []);

  return (
    <>
      <Products
        id='women'
        className='women-products'
        heading='Women Best Selling Product'
        description='Lorem ipsum dolor sit amet tellus'
        cards={womenProducts}
        btnLink='/categories/women'
      ></Products>
      <Products
        id='men'
        className='men-products'
        heading='Men Best Selling Product'
        description='Lorem ipsum dolor sit amet tellus'
        cards={menProducts}
        btnLink='/categories/men'
      ></Products>
    </>
  );
};
