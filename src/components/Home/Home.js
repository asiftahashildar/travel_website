import React from 'react';
import popularDestinations from '../../data/popularDestinations';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Paper,
  Container
} from '@mui/material';
import Footer from '../Footer/Footer';
import './Home.scss';

const Home = () => {
  return (
    <Box className="home">
      {/* HERO SECTION */}
      <Box className="hero">
        <Box className="overlay">
          <Typography variant="h2" className="hero-title">
            Discover South India With Us
          </Typography>
          <Typography variant="h6" className="hero-subtitle">
            Your Perfect Journey Starts with a Single Click – From City Rides to Weekend Getaways, We’ve Got You Covered.
          </Typography>
        </Box>
      </Box>

      {/* DESTINATIONS SECTION */}
      <Box className="destinations-carousel">
        <Typography variant="h4" className="section-title">
          Top Tourist Destinations
        </Typography>
        <Grid container spacing={3} justifyContent="center" className="carousel">
          {popularDestinations.map((place, idx) => (
            <Grid item key={idx}>
              <Card sx={{ width: 280, height: 220, borderRadius: '1rem', boxShadow: 3 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="160"
                    image={place.image}
                    alt={place.name}
                    sx={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
                  />
                  <CardContent>
                    <Typography variant="subtitle1" className="card--title" align="center" sx={{ fontFamily: 'Pacifico, cursive', fontSize: '1.4rem' }}>
                      {place.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* DETAILS SECTION */}
      <Box className="details--container">
        <Paper className="details-card highlights" elevation={6} id="services">
          <Typography variant="h5" gutterBottom>Why Choose Us?</Typography>
          <ul>
            <li>✔ Clean & Sanitized Vehicles</li>
            <li>✔ 24x7 Customer Support</li>
            <li>✔ Professional Drivers</li>
            <li>✔ Transparent Pricing</li>
          </ul>
        </Paper>

        <Paper className="details-card contact" elevation={6} id="contact">
          <Typography variant="h5" gutterBottom>Contact Us</Typography>
          <Typography><strong>Phone:</strong> +91 9876543210</Typography>
          <Typography><strong>Email:</strong> info@touroperator.com</Typography>
          <Typography><strong>Office:</strong> Bangalore, Karnataka, India</Typography>
        </Paper>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
