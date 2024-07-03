import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import Sidebar from "./sidebar";
import {
  faHome,
  faBars,
  faMobileAndroidAlt,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import '../styles/navbar.scss';

export default function Navbar() {
  const [showBar, setShowBar] = useState(false);

  const links = [
    { name: "Home", path: "/", icon: faHome },
    { name: "Recipe", path: "/page3", icon: faBars },
    { name: "Contact", path: "/contact", icon: faMobileAndroidAlt },
  ];

  function closeSidebar() {
    setShowBar(false);
  }

  const location = useLocation();

  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          FOOD<span>+</span>
          <p className="p">Fair Price Always</p>
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div
          onClick={() => setShowBar(!showBar)}
          className={showBar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Settings Icon */}
        <Link to="/page2" className="settings-icon">
          <FontAwesomeIcon icon={faCog} />
        </Link>
      </div>

      {showBar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}
