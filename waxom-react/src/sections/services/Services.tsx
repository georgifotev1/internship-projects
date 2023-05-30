import "./services.css";
import webDesignIcon from "../../assets/icons/webdesign-icon.png";
import webDesignHoverIcon from "../../assets/icons/web-design-icon-hover.png";
import developmenIcon from "../../assets/icons/development-icon.png";
import developmenHoverIcon from "../../assets/icons/service-development-icon-hover.png";
import customizationIcon from "../../assets/icons/customization-icon.png";
import customizationHoverIcon from "../../assets/icons/customization-icon-hoover.png";
import marketingIcon from "../../assets/icons/marketing-icon.png";
import marketingHoverIcon from "../../assets/icons/marketing-icon-hover.png";
import Card from "../../components/section-card/Card";
import { useState } from "react";
import Section from "../../components/section/Section";

export default function Services() {
  const [services, setServices] = useState([
    {
      icon: webDesignIcon,
      iconHover: webDesignHoverIcon,
      isHover: false,
      alt: "web-design",
      heading: "Web & App Design",
      description:
        "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.",
    },
    {
      icon: developmenIcon,
      iconHover: developmenHoverIcon,
      isHover: false,
      alt: "development",
      heading: "Development",
      description:
        "Claritas est etiam processus dynamicus, qui sequitur mutationem lectorium. Mutationem consuetudium lectorium.",
    },
    {
      icon: customizationIcon,
      iconHover: customizationHoverIcon,
      isHover: false,
      alt: "customization",
      heading: "Customization",
      description:
        "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.",
    },
    {
      icon: marketingIcon,
      iconHover: marketingHoverIcon,
      isHover: false,
      alt: "marketing",
      heading: "Marketing",
      description:
        "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.",
    },
  ]);

  return (
    <Section className='services' id='about' shell>
      <div className='cards services-cards'>
        {services.map(
          ({ icon, iconHover, isHover, heading, description }, index) => (
            <Card
              key={`Service number ${index}`}
              className='section-item'
              wrapperProps={{
                onMouseOver: () => {
                  isHover = true;
                  setServices([...services]);
                },
                onMouseOut: () => {
                  isHover = false;
                  setServices([...services]);
                },
              }}
              linkProps={{
                href: "#home",
                style: {
                  backgroundImage: `url(${isHover ? iconHover : icon})`,
                },
              }}
              heading={heading}
              description={description}
            />
          )
        )}
      </div>
    </Section>
  );
}
