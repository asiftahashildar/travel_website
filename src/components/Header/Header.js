import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  useMediaQuery,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.scss';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderMobileDrawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
      <div style={{ width: 220, padding: '1rem', color:'#0D5EA6', fontSize: '0.8rem' }}>
        <List>
          <ListItem button onClick={() => scrollToSection('contact')}>
            <ListItemText primary="Contact us" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection('services')}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection('about')}>
            <ListItemText primary="About us" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );

  return (
    <>
 <AppBar position="static" className="header-bar">
  <Toolbar className="toolbar">
    {/* LEFT - LOGO */}
    <Typography className="logo">
      <img src="/images/logo.png" alt="Logo" width={130} height={60} />
    </Typography>

    {/* CENTER - NAV LABELS (only desktop) */}
    {!isMobile && (
      <div className="nav-labels">
        <label onClick={() => scrollToSection('contact')}>Contact us</label>
        <label onClick={() => scrollToSection('services')}>Services</label>
        <label onClick={() => scrollToSection('about')}>About us</label>
      </div>
    )}

    {/* RIGHT - DESKTOP BUTTONS OR HAMBURGER */}
    <div className="header-right">
      {!isMobile ? (
        <div className="nav-links">
          <Button className="booking-button" component={Link} to="/">Home</Button>
          <Button className="booking-button" component={Link} to="/booking">Booking</Button>
        </div>
      ) : (
        <IconButton onClick={toggleDrawer}>
          <MenuIcon sx={{ color: '#0D5EA6' }} />
        </IconButton>
      )}
    </div>
  </Toolbar>

  {/* MOBILE VIEW: Buttons below */}
  {isMobile && (
    <Box className="mobile-buttons">
      <Button className="booking-button" component={Link} to="/" size="small">Home</Button>
      <Button className="booking-button" component={Link} to="/booking" size="small">Booking</Button>
    </Box>
  )}
</AppBar>

      {renderMobileDrawer}
    </>
  );
};

export default Header;
