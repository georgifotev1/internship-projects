import { Section } from "../../components/section/Section";
import laptop1 from "../../assets/laptop1.png";
import laptop2 from "../../assets/laptop2.png";
import laptop3 from "../../assets/laptop3.png";
import laptop4 from "../../assets/laptop4.png";
import "./portfolio.css";

export default function Portfolio() {
  const sectionItems = [
    {
      image: laptop1,
      title: "ISOMETRIC PERSPECTIVE MOCK-UP",
      alt: "laptop1",
    },
    {
      image: laptop2,
      title: "TIME ZONE APP UI",
      alt: "laptop2",
    },
    {
      image: laptop3,
      title: "VIRO MEDIA PLAYERS UI",
      alt: "laptop3",
    },
    {
      image: laptop4,
      title: "BLOG / MAGAZINE FLAT UI KIT",
      alt: "laptop4",
    },
  ];

  const portfolioLinks = [
    {
      title: "ALL",
      href: "https://google.com",
    },
    {
      title: "WEB",
      href: "https://google.com",
    },
    {
      title: "APPS",
      href: "https://google.com",
    },
    {
      title: "ICONS",
      href: "https://google.com",
    },
  ];

  return (
    <Section
      className='portfolio'
      sectionId='work'
      title='OUR PORTFOLIO'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etnetus et malesuada fames. Platea dictumst vestibulum rhoncus est.'
      portfolioNav={portfolioLinks}
      textColorClassName='text-black'
    >
      {sectionItems.map((item, index) => (
        <div
          key={`Item ${index}`}
          className='portfolio-item col-lg-6 col-md-12 text-center'
        >
          <img src={item.image} alt={item.alt} />
          <h4>{item.title}</h4>
        </div>
      ))}
      <a className='button load-more text-white' href='https://google.com'>
        LOAD MORE PROJECTS
      </a>
    </Section>
  );
}
