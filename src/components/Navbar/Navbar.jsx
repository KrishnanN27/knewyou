import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Logo from "../../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [sidenav, setSidenav] = useState(false);

  //   //Desktop fixed Menu
  const [sticky, setSticky] = useState(false);

  //Mobile Icon

  const menuIcon = <FontAwesomeIcon icon={faBars} />;

  //SideNav
  const sidenavShow = () => {
    setSidenav(!sidenav);
  };

  //scroll fixed Navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <header id="site_header" className={`${sticky ? "sticky" : ""}`}>
        <div className="container">
          <nav className="navbar" id="Navbar">
            <div className="navbar_brand">
              <a href="/">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <div className="navbar_toggler" onClick={sidenavShow}>
              {menuIcon}
            </div>
            <div className={`menu_items ${sidenav === true ? "active" : ""}`}>
              <ul>
                <li>
                  <Link to="home" spy smooth offset={-90}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="vision" spy smooth offset={-90}>
                    Vision
                  </Link>
                </li>
                <li>
                  <Link to="services" spy smooth offset={-90}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="community" spy smooth offset={-90}>
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="events" spy smooth offset={-90}>
                    Events
                  </Link>
                </li>
                <li className="nav_cta">
                  <Link to="connect" spy smooth offset={-90}>
                    Connect
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
