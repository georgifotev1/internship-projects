import { Section } from '../../components/section/Section';

import mobileImg from '../../assets/accessories-img-nobg.png';
import './Accsessories.css';
import { Banner } from '../../components/Banner/Banner';

export const Accsessories = () => (
  <Section className='accessories'>
    <Banner
      className='banner'
      imageProps={{
        src: mobileImg,
        alt: 'img',
      }}
      heading='Your Daily Accessories Checklist'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.'
      pack
    ></Banner>
  </Section>
);
