import Section from "../../components/section/Section";
import "./ideas.css";
import browsers from "../../assets/browsers.png";
export default function Ideas() {
  return (
    <Section
      id="features"
      className='ideas'
      shell
      heading='Waxom is Realization of your Ideas'
      description='Investigationes demonstraverunt lectores legere me lius quod ii legunt
    saepius. Claritas est etiam processus dynamicus, qui sequitur
    mutationem consuetudium.'
    >
      <div className='ideas-image'>
        <img className='browsers-image' src={browsers} alt='browsers' />
      </div>
    </Section>
  );
}
