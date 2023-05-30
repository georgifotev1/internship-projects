import "./footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className='shell'>
        <div className='footer'>
          <ul>
            <li>
              <a href='home'>About Us</a>
            </li>
            <li>
              <a href='home'>Contact Us</a>
            </li>
          </ul>
          <p>
            &copy; 2016 Graphicstall. Trademarks and brands are the property of
            their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};
