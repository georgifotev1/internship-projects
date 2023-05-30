import React from "react";
import flag from "../../assets/flag.png";
import pencil from "../../assets/pencil.png";
import gear from "../../assets/gear.png";
import rocket from "../../assets/rocket.png";
import { Section } from "../../components/section/Section";
import "./service.css";

export default function Service() {
  const sectionItems = [
    {
      image: flag,
      title: "BRANDING",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      image: pencil,
      title: "DESIGN",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      image: gear,
      title: "DEVELOPMENT",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    },
    {
      image: rocket,
      title: "ROCKET SCIENCE",
      description:
        "Et harum quidem rerum est et expedita distinctio. Nam libero tempore.",
    },
  ];

  return (
    <Section
      className='services-we-provide'
      title='SERVICES WE PROVIDE'
      description='We are working with both individuals and businesses from all over the globe to create awesome websites and applications.'
    >
      {sectionItems.map((item, index) => (
        <div
          key={`Service ${index}`}
          className='services col-lg-3 col-md-6 text-center'
        >
          <img src={item.image} alt='flag' />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </Section>
  );
}
