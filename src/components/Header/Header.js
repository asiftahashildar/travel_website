import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Header.scss';

const Header = () => {
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="static" className="header-bar">
      <Toolbar className="toolbar">
        <Typography variant="h6" component="div" className="logo">
           <img src="/images/logo.png" alt="Raja Travels Logo" width={200} height={100} className="logo-img" />
        </Typography>
        <div className="nav-labels">
          <label onClick={() => scrollToSection('contact')}>Contact us</label>
          <label onClick={() => scrollToSection('services')}>Services</label>
          <label onClick={() => scrollToSection('about')}>About us</label>
        </div>
        <div className="nav-links">
          <Button
            className="booking-button"
            component={Link}
            to="/"
            color="inherit"
          >
            Home
          </Button>
          <Button
            className="booking-button"
            component={Link}
            to="/booking"
            color="inherit"
          >
            Booking
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
