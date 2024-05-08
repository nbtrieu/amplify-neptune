import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">PersonDB Portal</div>
      <div className="nav-container">
        <div className="nav-items">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-item ${isActive ? 'active-nav-item' : ''}`}
          >
            Keyword
          </NavLink>
          <NavLink 
            to="/organization" 
            className={({ isActive }) => `nav-item ${isActive ? 'active-nav-item' : ''}`}
          >
            Organization
          </NavLink>
          <NavLink 
            to="/name" 
            className={({ isActive }) => `nav-item ${isActive ? 'active-nav-item' : ''}`}
          >
            Name
          </NavLink>
        </div>
        <button className="profile-button">TU</button>
      </div>
    </div>
  );
}

export default NavBar;
