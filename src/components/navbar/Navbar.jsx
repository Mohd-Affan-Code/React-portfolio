import React, { useRef } from "react";
import "./Navbar.scss";
import logo from "../../assets/arizona.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <img
        src={menu_open}
        onClick={openMenu}
        alt="menuOpen"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="menuClose"
          className="nav-mob-close"
        />
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={10} href="#home">
            {" "}
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            About me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            Serviecs
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#portfolio">
            Portfolio
          </AnchorLink>{" "}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Contact
          </AnchorLink>{" "}
        </li>
      </ul>
      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me{" "}
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
