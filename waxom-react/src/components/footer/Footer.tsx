import "./footer.css";
import logo from "../../assets/waxom-logo.png";
import widget from "../../assets/dribbble-widget-image.png";
import FooterSection from "../footerSection/FooterSection";
export default function Footer() {
  const recentPosts = [
    "Lectus mauris ultrices eros in cursus turpis massa tincidunt",
    "Vel turpis nunc eget lorem dolor sed viverra ipsum nunc",
    "Lectus mauris ultrices eros in cursus turpis massa tincidunt",
  ];
  const tweets = [
    <p>
      <span className='blue'>@waxom</span>"Vel turpis nunc eget lorem dolor sed
      viverra ipsum"
    </p>,
    <p>
      Lectus mauris <span className='blue'>#envato</span> ultrices eros in
      cursus turpis massa tincidunt dui
    </p>,
    <p>
      Soluta nobis option <span>bit.ly/Hniso7</span>
    </p>,
  ];
  const copyrights = [
    "Copyright \u00a9 2022 Waxom",
    "Privacy Policy",
    "FAQ",
    "Support",
  ];
  return (
    <footer>
      <div className='footer-info' id='contact'>
        <FooterSection>
          <div className='logo-footer'>
            <img src={logo} alt='logo' />
            <span>Waxom</span>
          </div>
          <div className='post'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
              turpis nunc eget lorem dolor sed viverra ipsum nunc
            </p>
          </div>

          <a className='read-more' href='#home'>
            Read More
          </a>
        </FooterSection>
        <FooterSection heading='Recent Posts'>
          {recentPosts.map((post, index) => (
            <div key={`Recent post-${index}`} className='post'>
              <span className='timeline'>September 08,2022</span>
              <p>{post}</p>
            </div>
          ))}
        </FooterSection>
        <FooterSection heading='Our Twitter'>
          {tweets.map((tweet, index) => (
            <div key={`Recent tweet-${index}`} className='post'>
              {tweet}
              <span className='timeline'>3 minutes ago</span>
            </div>
          ))}
        </FooterSection>
        <FooterSection heading='Dribble Widget'>
          <img src={widget} alt='widget' />
        </FooterSection>
      </div>
      <div className='footer-copyright'>
        <div className='copyright'>
          <ul>
            {copyrights.map((element, index) => (
              <li key={`Footer element ${index}`}>{element}</li>
            ))}
          </ul>
        </div>
        <div className='creators'>
          <ul>
            <li>Designed by ThemeFire</li>
            <li>Only on Envato Market</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
