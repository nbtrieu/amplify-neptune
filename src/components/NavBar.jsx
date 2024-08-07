import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = ({ signOut }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null)
  }

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
          <NavLink 
            to="/publication-product" 
            className={({ isActive }) => `nav-item ${isActive ? 'active-nav-item' : ''}`}
          >
            Product
          </NavLink>
        </div>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} size="small">
              <button className="profile-button">TU</button>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {/* {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))} */}
            <MenuItem onClick={signOut}>
              <Typography textAlign="center">Log out</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </div>
    </div>
  );
}

export default NavBar;
