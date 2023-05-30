import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import "./header.css";

export default function Header() {
  const [isActive, setActive] = useState(false);
  const navigation = [
    {
      title: "HOME",
      href: "#home",
    },
    {
      title: "ABOUT",
      href: "#about",
    },
    {
      title: "WORK",
      href: "#work",
    },
    {
      title: "BLOG",
      href: "#blog",
    },
    {
      title: "CONTACT",
      href: "#contacts",
    },
  ];
  return (
    <header className='header'>
      <div className='shell'>
        <div className='header-inner'>
          <a className='logo' href='#home'>
            <img src={logo} alt='logo' />
          </a>
          <nav className={`navigation ${isActive ? "active" : ""}`}>
            <a
              className='navigation-toggle'
              onClick={() => {
                setActive(!isActive);
              }}
              href='#home'
            >
              <span></span>
            </a>
            <ul>
              {navigation.map((item, index) => (
                <li key={`Navigation link ${index}`}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
