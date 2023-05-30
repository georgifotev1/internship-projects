import { Link } from 'react-router-dom';
import './Banner.css';
import { IBannerProps } from './types';

export const Banner = ({
  className,
  imageProps,
  heading,
  description,
  pack,
  gender,
}: IBannerProps) => (
  <div className={className}>
    <img alt='' {...imageProps} />
    {heading && (
      <div className='banner-content'>
        {gender && <div className='gender'>
          <Link to={'/'}>Home</Link>/ <Link to={`/categories/${gender}`}>{gender}</Link>
        </div>}
        <h2 className='banner-heading'>{heading}</h2>
        <p className='banner-description'>{description}</p>
        {pack && <p className='complete-pack'>Complete Your Pack</p>}
      </div>
    )}
  </div>
);
