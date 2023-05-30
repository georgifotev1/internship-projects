import greyCircle from "../../assets/greyCircle.png";
import { Section } from "../../components/section/Section";
import "./testimonial.css";

export default function Testimonial() {
  const sectionItems = [
    [
      {
        description:
          'Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl selerique."',
        title: "CHANEL IMAN",
        position: "CEO of Pinterest",
      },
      {
        description:
          '"Vivamus luctus urna sed urna ultricies ac tempor dui sagitts. In condimentum facilisis porta."',
        title: "ADRIANA LIMA",
        position: "Founder of Instagram",
      },
    ],
    [
      {
        description:
          '"Vivamus luctus urna sed urna ultricies ac tempor dui sagitts. In condimentum facilisis porta."',
        title: "ANNE HATHAWAY",
        position: "Lead Design at Bahance",
      },
      {
        description:
          '"Phasellus non purus vel arcu tempor commodo. Fusce semper, purus vel luctus molestie, risus sem cursus neque."',
        title: "EMMA STONE",
        position: "Co-Founder of Shazam",
      },
    ],
  ];
  return (
    <Section
      className='about'
      sectionId='blog'
      title='WHAT PEOPLE SAY ABOUT US'
      description='Our clients love us!'
    >
      {sectionItems.map((row, index) => (
        <div key={`Row ${index}`} className='row'>
          {row.map((col, index) => (
            <div key={`Column ${index}`} className='col-lg-6'>
              <div className='row text-center'>
                <div className='col-lg-6 col-md-12'>
                  <img src={greyCircle} alt='grey-circle' />
                </div>
                <div className='col-lg-6 col-md-12'>
                  <p>{col.description}</p>
                  <h3>{col.title}</h3>
                  <h5 className='comment-positions'>{col.position}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </Section>
  );
}
