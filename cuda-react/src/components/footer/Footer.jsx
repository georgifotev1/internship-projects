import React from "react";
import "./footer.css";

export default function Footer() {
  const footerNav = [
    {
      name: "Facebook",
      href: "https://facebook.com",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
    },
    {
      name: "Google+",
      href: "https://google.com",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      name: "Behance",
      href: "https://behance.com",
    },
    {
      name: "Dribble",
      href: "https://dribble.com",
    },
  ];
  return (
    <footer className='footer'>
      <div className='shell'>
        <div className='footer-content'>
          <ul className='row'>
            {footerNav.map((item, index) => (
              <li
                key={`Footer navigation ${index}`}
                className='col-md-2 col-sm-6'
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
