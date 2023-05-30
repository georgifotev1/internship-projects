import "./partners.css";
import logo1 from "../../assets/partner-logo-1.png";
import logo2 from "../../assets/partner-logo-2.png";
import logo3 from "../../assets/partner-logo-3.png";
import logo4 from "../../assets/partner-logo-4.png";

export default function Partners() {
  const partners = [logo1, logo2, logo3, logo4];
  return (
    <section className='partners'>
      {partners.map((partner, index) => (
        <div key={`Partner logo ${index}`} className='partner-logo'>
          <img src={partner} alt={`Partner ${index}`} />
        </div>
      ))}
    </section>
  );
}
