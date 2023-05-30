import Section from "../../components/section/Section";
import Card from "../../components/section-card/Card";
import "./projects.css";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import project4 from "../../assets/projects/project4.png";
import project5 from "../../assets/projects/project5.png";
import project6 from "../../assets/projects/project6.png";

export default function Projects() {
  const items = [
    {
      image: project1,
      heading: "Claritas Etiam Processus",
      description: "Photography, Nature",
    },
    {
      image: project2,
      heading: "Quam Nutamus Farum",
      description: "Graphic Design, Mock-Up",
    },
    {
      image: project3,
      heading: "Usus Legentis Videntur",
      description: "Photography, Holiday",
    },
    {
      image: project4,
      heading: "Claritas Etiam Processus",
      description: "Photography, Nature",
    },
    {
      image: project5,
      heading: "Quam Nutamus Farum",
      description: "Graphic Design, Mock-Up",
    },
    {
      image: project6,
      heading: "Usus Legentis Videntur",
      description: "Photography, Holiday",
    },
  ];

  const projectNav = [
    "All",
    "Web Design",
    "Mobile App",
    "Illustration",
    "Photography",
  ];

  return (
    <Section
      id="portfolio"
      className='projects'
      shell
      heading='Our Latest Projects.'
      description='Investigationes demonstraverunt lectores legere me lius quod ii legunt
    saepius. Claritas est etiam processus dynamicus, qui sequitur
    mutationem consuetudium.'
    >
      <ul className='projects-nav'>
        {projectNav.map((item, index) => (
          <li key={`Project navigation item ${index}`}>
            <a href='#home'>{item}</a>
          </li>
        ))}
      </ul>
      <div className='cards projects-cards'>
        {items.map(({ image, heading, description }, index) => (
          <Card
            key={`Project card ${index}`}
            className='project-card'
            linkProps={{
              href: "#home",
            }}
            imageProps={{
              src: image,
              alt: `project-${index + 1}`,
            }}
            heading={heading}
            description={description}
          />
        ))}
      </div>
      <div className='projects-button'>
        <a className='button button-green' href='#home'>
          LOAD MORE
        </a>
      </div>
    </Section>
  );
}
