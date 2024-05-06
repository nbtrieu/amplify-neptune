import React from 'react';
import '../index.css';

const NavBar = () => {
  // In a real app, the active state would be determined by the route, for example.
  const [activeItem, setActiveItem] = React.useState('Keyword'); // Default active item

  const handleNavItemClick = (item) => {
    setActiveItem(item);
    // Implement the logic for when a nav item is clicked
  };

  return (
    <div className="navbar">
      <div className="logo">PersonDB Portal</div>
      <div className="nav-container">
        <div className="nav-items">
          {['Keyword', 'Organization', 'Name'].map((item) => (
            <div
              key={item}
              className={`nav-item ${activeItem === item ? 'active-nav-item' : ''}`}
              onClick={() => handleNavItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <button className="profile-button">TU</button>
      </div>
    </div>
  );
};

export default NavBar;
