import webdesign from "../../assets/skills/webdesign-skill.png";
import htmlcss from "../../assets/skills/html-css-skill.png";
import graphicDesign from "../../assets/skills/graphic-design-skill.png";
import uiux from "../../assets/skills/ui-ux-skill.png";
import { Section } from "../../components/section/Section";
import "./skills.css";

export default function Skills() {
  const sectionItems = [
    {
      image: webdesign,
      alt: "web-design-skills",
      title: "WEB DESIGN",
    },
    {
      image: htmlcss,
      alt: "html-css-skills",
      title: "HTML / CSS",
    },
    {
      image: graphicDesign,
      alt: "graphic-design-skills",
      title: "GRAPHIC DESIGN",
    },
    {
      image: uiux,
      alt: "ui-ux-skills",
      title: "UI / UX",
    },
  ];

  return (
    <Section
      className='skills'
      title='WE GOT SKILLS!'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.'
      textColorClassName='text-black'
    >
      {sectionItems.map((item, index) => (
        <div
          key={`Skill ${index}`}
          className='services col-lg-3 col-md-6 text-center'
        >
          <img src={item.image} alt={item.alt} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </Section>
  );
}
