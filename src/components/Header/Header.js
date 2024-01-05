import React from 'react';
import './Header.css';
import logo from '../../assets/images/DogPNG.png';
import { useState, useRef } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  const [DropdownMenu, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const handleDropdown = () => {
    setDropdown(!DropdownMenu);
    if (DropdownMenu === true) {
      dropdownRef.current.style.transform = 'rotate(0deg)';
    } else {
      dropdownRef.current.style.transform = 'rotate(180deg)';
    }
  };

  return (
    <>
      <header>
        <div className='mobileHeader'>
          <div className='headerContainer'>
            <div className='iconContainer'>
              <i
                onClick={handleDropdown}
                id='burgerMenu'
                className='fas fa-bars'
              ></i>
              <i
                ref={dropdownRef}
                id='arrowMenu'
                className='fas fa-angle-down'
              ></i>
            </div>
          </div>
          <div className='headerLogo'>
            <Link to={'/'}>
              <img
                className='logoImg'
                src={logo}
                alt='logo'
              />
            </Link>
          </div>
          <div className='headerSpace'></div>
        </div>
        <div className='desktopHeader'>
          <div className='headerLogo'>
            <Link to={'/'}>
              <img
                className='logoImg'
                src={logo}
                alt='logo'
              />
            </Link>
          </div>
          <div className='desktopLinks'>
            <Link
              className='navLink'
              to='/contact'
            >
              CONTACTO
            </Link>
            <Link
              className='navLink'
              to='/about'
            >
              NOSOTROS
            </Link>
          </div>
        </div>
      </header>
      {DropdownMenu ? <Dropdown change={handleDropdown} /> : null}
    </>
  );
};

export default Header;
