import { Link } from "react-router-dom";
import "./header.css";
import avatar from "../../assets/user-avatar.png";
import cart from "../../assets/icons/bag-cart-icon.png";
import heart from "../../assets/icons/heart-header-icon.png";
import search from "../../assets/icons/search-icon.png";
import { useState } from "react";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Header = () => {
  const [isActive, setActive] = useState(false);
  const nav = [
    {
      title: "Men",
      path: "/categories/men",
    },
    {
      title: "Women",
      path: "/categories/women",
    },
    {
      title: "Bridal",
      path: "#home",
    },
    {
      title: "Baby & Kids",
      path: "#home",
    },
  ];

  return (
    <header>
      <div className='shell'>
        <div className='header'>
          <div className='authentication'>
            <img className='avatar' src={avatar} alt='avatar' />
            <a href='#home'>Login</a>
            <div className='vertical'></div>
            <a href='#home'>Sign Up</a>
          </div>
          <Link to={"/"}>
            <div className='logo'>
              <h1>UINITY</h1>
              <h4>FASHION</h4>
            </div>
          </Link>
          <div className='check-out'>
            <a className='heart-icon' href='#home'>
              <img src={heart} alt='heart' />
            </a>
            <a className='cart-icon' href='#home'>
              <img src={cart} alt='cart' />
            </a>
            <span>$1200</span>
          </div>
        </div>
      </div>
      <div className='border'></div>
      <div className='shell'>
        <div className='nav-bar'>
          <a className='search' href='#home'>
            <img src={search} alt='search' />
          </a>
          <nav className={`navigation ${isActive ? "active" : ""}`}>
            <a
              className='navigation-toggle'
              onClick={() => {
                setActive(!isActive);
              }}
              href='#link'
            >
              <i className='fa fa-bars'></i>
            </a>

            <ul>
              {nav.map((element, index) => (
                <li key={`Navigation element ${index}`}>
                  <Link
                    className='nav-link'
                    to={element.path}
                    onClick={() => {
                      setActive(!isActive);
                    }}
                  >
                    {element.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <SocialMedia></SocialMedia>
        </div>
      </div>
      <div className='border'></div>
    </header>
  );
};
