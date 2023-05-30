import "./Mix.css";
import { Section } from "../../components/section/Section";
import { useEffect, useState } from "react";
import { useImages } from "../../hooks/images-hook";
import { ICards } from "./types";

export const Mix = () => {
  const [cards, setCards] = useState<ICards[]>([]);
  useEffect(() => {
    async function FetchData() {
      const response = await useImages('mix-max');
      const images = response.map(({ imagePath }: { imagePath: string }) => imagePath)
      setCards([{
        image: images[0],
        heading: "Classic & Vintage",
        isHover: false,
      },
      {
        image: images[1],
        heading: "Winter Casual",
        isHover: false,
      },
      {
        image: images[2],
        heading: "Manners Maketh Man",
        isHover: false,
      }])
    }
    FetchData();
  }, []);

  const mixNav = ["Top", "Bottom", "Dress", "Footwear", "Accessories"];
  return (
    <Section
      className='mix'
      shell
      heading='Mix & Mac'
      description='Lorem ipsum dolor si amet'
    >
      <div className='mix-products'>
        {cards.map(({ image, heading, isHover }, index) => (
          <div
            key={`Mix card ${index}`}
            className='mix-card'
            onMouseOver={() => {
              cards[index].isHover = true;
              setCards([...cards]);
            }}
            onMouseOut={() => {
              cards[index].isHover = false;
              setCards([...cards]);
            }}
          >
            <div
              className='mix-image'
              style={{
                background: `${isHover
                  ? `linear-gradient( rgba(16, 16, 16, 0.7), rgba(16, 16, 16, 0.7)), url(${image})`
                  : `url(${image})`
                  }`,
              }}
            >
              <ul className='mix-nav'>
                {mixNav.map((item, index) => (
                  <li key={`Mix navigation item ${index}`}>
                    <a href='#home'> {item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mix-info'>
              <h4>{heading}</h4>
              <p>
                Lorem ipsum dolor sit amet, tellus enim, varius nec magna
                lobortis neque, aenean tempor, arcu magnam nisl nulla a, sed
                nec. Ac elit consequat et integer.
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
