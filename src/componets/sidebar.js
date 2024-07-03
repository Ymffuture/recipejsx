import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import partnership from "../assets/logo3.png";
import part from "../assets/Logo Maker 2024_05_24_02_29_10.png";

export default function Sidebar({ links, close }) {
  const location = useLocation();
  return (
    <div className="sidebar" onClick={close}>
      <a href="#!" className="logo">
        FOOD<span>+</span>
      </a>
      {links.map((link) => (
        <Link
          className={
            location.pathname === link.path
              ? "sidebar-link active"
              : "sidebar-link"
          }
          to={link.path}
          key={link.name}
        >
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </Link>
      ))}
      <img className="logo3" src={part} alt="" />
      <img className="logo3" src={partnership} alt="" />
    </div>
  );
}
