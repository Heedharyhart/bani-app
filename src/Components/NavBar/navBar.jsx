import React from "react";
import Logo from "../../Icons/bani-logo.svg";
import Bell from "../../Icons/bell-icon.svg";
import Chevron from "../../Icons/chevron-up.svg";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navigation">
      <div className="navigation__logo">
        <img alt="bani-logo" src={Logo} />
      </div>
      <div className="navigation__content">
        <img alt="Bell-icon" src={Bell} />
        <div className="navigation__content_text">
          <h4>JT</h4>
          <div className="navigation__content_text-words">
            <h5>JT Industry Limit..</h5>
            <span>JamesT@gmail.com</span>
          </div>
          <img alt="chevron-uo-icon" src={Chevron} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
