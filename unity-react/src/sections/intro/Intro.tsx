import './intro.css';
import { Section } from '../../components/section/Section';
import banner from '../../assets/main-banner.png';
import { Button } from '../../components/Button/Button';
import { Banner } from '../../components/Banner/Banner';

export const Intro = () => {
  return (
    <Section className='main-banner' shell id='home'>
      <Banner
        imageProps={{
          className: 'main-banner-image border',
          src: banner,
          alt: 'main-banner',
        }}
      ></Banner>
      <div className='border'></div>
      <div className='subscribe'>
        <p>
          Subscribe our newsletter and keep update fo new product & Promotion
        </p>
        <form action='post'>
          <input type='text' placeholder='Your Email Addres' />
          <Button variant='white' text='SUBMIT'></Button>
        </form>
      </div>
      <div className='border'></div>
    </Section>
  );
};
