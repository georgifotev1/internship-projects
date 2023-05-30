import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Section } from '../section/Section';
import { Spinner } from '../Spinner/Spinner';
import { IProductsProps } from './types';

export function Products({ id, className, heading, description, cards, btnLink }: IProductsProps) {
  return (
    <Section id={id} className={className} shell heading={heading} description={description}>
      <div className='best-products'>
        {cards.length === 0 ? <Spinner></Spinner> : cards.map(({ hasHeart, isFavorite, price, discount, shopNow, rating, info }, index) => (
          <Link key={`Card link ${index}`} to={'/details'} className='details-link'>
            <Card
              key={`Product card ${index}`}
              hasHeart={hasHeart}
              price={price}
              discount={discount}
              shopNow={shopNow}
              rating={rating}
              info={info}
              isFavorite={isFavorite}
            ></Card>
          </Link>
        ))}

      </div>
      <div className='button-center'>
        <Link className='btn' to={`${btnLink}`}>
          <Button variant='white' text='VIEW MORE'></Button>
        </Link>
      </div>
      <div className='border'></div>
    </Section>
  );
}
