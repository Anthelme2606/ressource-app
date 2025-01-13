import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/components/mobile-sidebar.css";

const MobileSidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="mobile-sidebar fixed-bottom">
      <ul className="mobile-items">
        <li className="mobile-item">
          <NavLink to="" className="mobile-item">
            <div className="icon-circle-mobile">
              <i className="bi bi-house"></i>
            </div>
          </NavLink>
        </li>
        <li 
          className="mobile-item"
          onMouseEnter={() => setIsDropdownOpen(true)} 
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <NavLink to="" className="mobile-item">
            <div className="icon-circle-mobile">
              <i className="bi bi-collection"></i>
            </div>
          </NavLink>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <NavLink to="/cours" className="dropdown-link">
                <i className="bi bi-book"></i> Cours
              </NavLink>
              <NavLink to="/sujets" className="dropdown-link">
                <i className="bi bi-file-earmark"></i> Sujets
              </NavLink>
              <NavLink to="/examens" className="dropdown-link">
                <i className="bi bi-file-earmark-text"></i> Examens
              </NavLink>
              <NavLink to="/livres" className="dropdown-link">
                <i className="bi bi-bookmark"></i> Livres
              </NavLink>
            </div>
          )}
        </li>
        <li className="mobile-item">
          <NavLink to="" className="mobile-item">
            <div className="icon-circle-mobile">
              <i className="bi bi-plus"></i>
            </div>
          </NavLink>
        </li>
        <li className="mobile-item">
          <NavLink to="" className="mobile-item">
            <div className="icon-circle-mobile">
              <i className="bi bi-gear"></i>
            </div>
          </NavLink>
        </li>
        <li className="mobile-item">
          <NavLink to="" className="mobile-item">
            <div className="icon-circle-mobile">
              <i className="bi bi-person"></i>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileSidebar;
