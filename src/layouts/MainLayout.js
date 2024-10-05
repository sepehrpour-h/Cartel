import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.css';
import { FaCog } from 'react-icons/fa'; 
import { FaBars } from 'react-icons/fa';

const MainLayout = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [iconMenuOpen, setIconMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleIconMenu = () => {
    setIconMenuOpen(!iconMenuOpen);
  };

  return (
    <div className="main-layout">
      <header>
        <nav className="navbar">
          <ul className="menu">
            <li
              className="menu-item hamburger-menu"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
              onClick={toggleDropdown}
            >
              <FaBars className="hamburger-icon" />
              {dropdownOpen && (
                <ul className="dropdown">
                  <li className="dropdown-item">Service 1</li>
                  <li className="dropdown-item">Service 2</li>
                  <li className="dropdown-item">Service 3</li>
                </ul>
              )}
            </li>
            
            <li
              className="menu-item home-menu"
              onMouseEnter={toggleIconMenu}
              onMouseLeave={toggleIconMenu}
              onClick={toggleIconMenu}
            >
              <FaCog className="menu-icon" />
              {iconMenuOpen && (
                <ul className="dropdown">
                  <li className="dropdown-item">Submenu 1</li>
                  <li className="dropdown-item">Submenu 2</li>
                  <li className="dropdown-item">Submenu 3</li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        Main Footer
      </footer>
    </div>
  );
};

export default MainLayout;