import "./header.css";
import "../layout/layout.css";
import logo from "../../assets/waxom-logo.png";
import { useState } from "react";
export default function Header() {
  const [isActive, setActive] = useState<boolean>(false);
  const navbar = [
   {name:"Home", path: "#home"},
    {name:"About Us", path: "#about"},
    {name:"Portfolio", path: "#portfolio"},
    {name:"Features", path: "#features"},
    {name:"Blog", path: "#blog"},
    {name:"Pricing", path: "#pricing"},
    {name:"Shortcode", path: "#shortcode"},
    {name:"Contact", path: "#contact"},
  ];
  return (
    <header>
      <div className="navigation">
        <a className="logo" href="#home">
          <img src={logo} alt="logo" />
          <span>Waxom</span>
        </a>
        <nav className={`nav-bar ${isActive ? "active" : ""}`}>
          <a
            className="navigation-toggle"
            onClick={() => {
              setActive(!isActive);
            }}
            href="home#"
          >
            <span></span>
          </a>
          <ul>
            {navbar.map((tag, index) => (
              <li key={`Navbar tag ${index}`}>
                <a href={tag.path}>{tag.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-icons">
          <div className="cart"></div>
          <div className="search"></div>
        </div>
      </div>
    </header>
  );
}
