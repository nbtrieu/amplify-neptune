import React from 'react';

const styles = {
  navbar: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)'
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#51565E'
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'normal',
    fontSize: '16px',
    color: '#51565E'
  },
  navItem: {
    margin: '0 10px',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  activeNavItem: {
    textDecoration: 'underline'
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
      <div style={styles.navItems}>
        <div
          style={activeItem === 'Keyword' ? { ...styles.navItem, ...styles.activeNavItem } : styles.navItem}
          onClick={() => handleNavItemClick('Keyword')}
        >
          Keyword
        </div>
        <div
          style={activeItem === 'Organization' ? { ...styles.navItem, ...styles.activeNavItem } : styles.navItem}
          onClick={() => handleNavItemClick('Organization')}
        >
          Organization
        </div>
        <div
          style={activeItem === 'Name' ? { ...styles.navItem, ...styles.activeNavItem } : styles.navItem}
          onClick={() => handleNavItemClick('Name')}
        >
          Name
        </div>
      </div>
      <button style={styles.profileButton}>TU</button>
    </div>
  );
};

export default NavBar;
