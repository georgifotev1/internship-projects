import "./counters.css";
import Card from "../../components/section-card/Card";
import userIcon from "../../assets/icons/counter-usr-icon.png";
import cupIcon from "../../assets/icons/cup-icon.png";
import blogIcon from "../../assets/icons/blog-icon.png";
import likesIcon from "../../assets/icons/likes-icon.png";
import launchIcon from "../../assets/icons/launch-icon.png";
import Section from "../../components/section/Section";

export default function Counters() {
  const countersInfo = [
    {
      image: userIcon,
      imageAlt: "user-icon",
      heading: "3587",
      description: "SATISFIED CLIENTS",
    },
    {
      image: cupIcon,
      imageAlt: "cup-icon",
      heading: "207",
      description: "CUPS OF COFFEE",
    },
    {
      image: blogIcon,
      imageAlt: "blog-icon",
      heading: "2500",
      description: "BLOG POSTS",
    },
    {
      image: likesIcon,
      imageAlt: "likes-icon",
      heading: "873",
      description: "LIKES",
    },
    {
      image: launchIcon,
      imageAlt: "launch-icon",
      heading: "900",
      description: "WE LAUNCHED",
    },
  ];
  return (
    <Section className='counter' id='shortcode'>
      <div className='cards counters-cards'>
        {countersInfo.map(
          ({ image, imageAlt, heading, description }, index) => (
            <Card
              key={`Counters card-${index}`}
              className='counter-card'
              linkProps={{
                href: "#home",
              }}
              imageProps={{
                src: image,
                alt: imageAlt,
              }}
              heading={heading}
              description={description}
              line
            ></Card>
          )
        )}
      </div>
    </Section>
  );
}
