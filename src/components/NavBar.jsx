import React from 'react';

const styles = {
  navbar: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)',
    justifyContent: 'flex-start', // Align items to the start of the container
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#51565E',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'flex-end', // Align items to the end of the container
    alignItems: 'center',
    flex: 1, // Take up remaining space
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'normal',
    fontSize: '16px',
    color: '#51565E',
    marginRight: '20px', // Add some space before the profile button
  },
  navItem: {
    margin: '0 10px',
    cursor: 'pointer',
    color: '#51565E', // default color for non-active items
  },
  activeNavItem: {
    color: '#0F9D58', // active item color
  },
  profileButton: {
    backgroundColor: '#A2DFC1',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

const NavBar = () => {
  // In a real app, the active state would be determined by the route, for example.
  const [activeItem, setActiveItem] = React.useState('Keyword'); // Default active item

  const handleNavItemClick = (item) => {
    setActiveItem(item);
    // Implement the logic for when a nav item is clicked
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>PersonDB Portal</div>
      <div style={styles.navContainer}>
        <div style={styles.navItems}>
          {['Keyword', 'Organization', 'Name'].map((item) => (
            <div
              key={item}
              style={activeItem === item ? { ...styles.navItem, ...styles.activeNavItem } : styles.navItem}
              onClick={() => handleNavItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <button style={styles.profileButton}>TU</button>
      </div>
    </div>
  );
};

export default NavBar;
