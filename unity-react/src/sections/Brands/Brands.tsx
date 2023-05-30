import { useEffect, useState } from "react";
import { Section } from "../../components/section/Section";
import { Spinner } from "../../components/Spinner/Spinner";
import { useImages } from "../../hooks/images-hook";
import "./Brands.css";

export const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function FetchData() {
      const response = await useImages('brands');
      setBrands(response);
    }
    FetchData();
  }, []);

  return (
    <Section
      className='brands'
      shell
      heading='Featured Brand'
      description='Lorem ipsum dolor sit amet tellus'
    >
      <div className='brand-images'>
        {brands.length === 0 ? <Spinner></Spinner> : brands.map(({ imagePath }, index) => (
          <img key={`Brand ${index}`} src={imagePath} alt='brand-img' />
        ))}
      </div>
    </Section>
  );
};
