import fb from "../../assets/icons/fb-icon.png";
import twitter from "../../assets/icons/twitter-icon.png";
import linkedIn from "../../assets/icons/linkedIn-icon.png";
import mail from "../../assets/icons/mail-icon.png";
import greyCircle from "../../assets/greyCircle.png";
import { Section } from "../../components/section/Section";
import "./team.css";

export default function Team() {
  const facebookLink = {
    title: fb,
    alt: "facebook",
    href: "https://facebook.com",
  };
  const twitterLink = {
    title: twitter,
    alt: "twitter",
    href: "https://twitter.com",
  };
  const linkedInLink = {
    title: linkedIn,
    alt: "linkedIn",
    href: "https://linkedin.com",
  };
  const mailLink = { title: mail, alt: "mail", href: "https://gmail.com" };

  const sectionItems = [
    {
      heading: "ANNE HATHAWAY",
      position: "CEO / Marketing Guru",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      socialMedia: [facebookLink, twitterLink, linkedInLink, mailLink],
    },
    {
      heading: "KATE UPTON",
      position: "Creative Director",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      socialMedia: [twitterLink, linkedInLink, mailLink],
    },
    {
      heading: "OLIVIA WILD",
      position: "Lead Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      socialMedia: [facebookLink, twitterLink, linkedInLink, mailLink],
    },
    {
      heading: "ASHLEY GREEN",
      position: "SEO / Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      socialMedia: [facebookLink, twitterLink, mailLink],
    },
  ];
  return (
    <Section
      className='team'
      sectionId='about'
      title='MEET OUR BEAUTIFUL TEAM'
      description='We are small team of designers, who help brands with big ideas.'
      textColorClassName='text-black'
    >
      {sectionItems.map((item, index) => (
        <div
          key={`Row ${index}`}
          className='services col-lg-3 col-md-6 text-center'
        >
          <img src={greyCircle} alt='grey-circle' />
          <h3>{item.heading}</h3>
          <h5 className='team-positions'>{item.position}</h5>
          <p>{item.description}</p>
          <ul>
            {item.socialMedia.length > 0 &&
              item.socialMedia.map((contact, index) => (
                <li key={`Social media ${index}`}>
                  <a href={contact.href}>
                    <img src={contact.title} alt={contact.alt} />
                  </a>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
