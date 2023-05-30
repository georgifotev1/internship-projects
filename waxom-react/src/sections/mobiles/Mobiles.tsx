import "./mobiles.css";
import phone from "../../assets/iphone-in-hand.png";
import arrow from "../../assets/icons/right-arrow-icon.png";
import Section from "../../components/section/Section";

export default function Mobiles() {
  const contentList = [
    "Nam liber tempor cum soluta nobis eleifend option",
    "Revolution Slider gives you unlimited possibilities",
    "Waxom is perfect solution for your professional",
    "Claritas est etiam processus dynamicus sequitur",
  ];
  return (
    <Section className='mobile-divices' shell>
      <div className='content'>
        <img className='phone-image' src={phone} alt='phone' />
        <div className='mobile-devices-content'>
          <div className='content-heading'>
            <h3>Excellent for Mobile Devices</h3>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynamicus, qui
              sequitur mutationem consuetudium.Investigationes demonstraverunt
              lectores legere me lius quod ii legunt saepius. Claritas est etiam
              processus dynamicus, qui sequitur mutationem consuetudium.
            </p>
          </div>
          <div className='content-list'>
            <ul>
              {contentList.map((description, index) => (
                <li key={`Mobiles list number-${index}`}>
                  <img src={arrow} alt='arrow' />
                  <p className='list-info'>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
