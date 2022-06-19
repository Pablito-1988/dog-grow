import React from "react";
import "./Header.css";
import logo from "../../assets/images/DogPNG.png";
/* import { Link } from "react-router-dom"; */
import { useState } from "react";
import Dropdown from "./Dropdown";

const Header = () => {
  const [DropdownMenu, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!DropdownMenu);
  };

  return (
    <>
      <header>
          <div className="headerLogo">
            <img src={logo} alt="logo" />
          </div>
        <div className="headerContainer">
          <div className="iconContainer">
            <i
              onClick={handleDropdown}
              id="burgerMenu"
              className="fas fa-bars"
            ></i>
          </div>
        </div>
      </header>
      {DropdownMenu ? <Dropdown change={handleDropdown} /> : null}
    </>
  );
};

export default Header;
