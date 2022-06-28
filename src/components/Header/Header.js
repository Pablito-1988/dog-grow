import React from "react";
import "./Header.css";
import logo from "../../assets/images/DogPNG.png";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Header = () => {
  const [DropdownMenu, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!DropdownMenu);
  };

  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="iconContainer">
            <i
              onClick={handleDropdown}
              id="burgerMenu"
              className="fas fa-bars"
            ></i>
            {/* <p className="burguerQuote">Menú</p> */}
          </div>
        </div>
        <div className="headerLogo">
          <Link to={"/"}>
            <img className="logoImg" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="headerSpace"></div>
      </header>
      {DropdownMenu ? <Dropdown change={handleDropdown} /> : null}
    </>
  );
};

export default Header;
