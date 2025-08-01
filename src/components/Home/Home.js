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
  Stack,
  Container
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
          <Typography
            variant="h6"
            className="hero-title"
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1.25rem',
              backgroundColor: '#ffffff',
              color: '#0D5EA6',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              border: '1px solid #eee',
              fontWeight: 600,
              fontFamily: 'Segoe UI, Roboto, sans-serif',
              backdropFilter: 'blur(2px)',
            }}
          >
            Book Now 7795516519
          </Typography>

          <a
            href="https://wa.me/8073287842?text=Hi%20Raja%20Travels!%20I%20want%20to%20book%20a%20trip."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: '1rem',
              display: 'inline-block',
              backgroundColor: '#25D366',
              color: 'white',
              padding: '0.75rem 1.25rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              textDecoration: 'none',
              fontFamily: 'Segoe UI, Roboto, sans-serif',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            Chat on WhatsApp
          </a>
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
          <Typography variant="h5" gutterBottom color="primary">Why Choose Us?</Typography>
          <ul>
            <li>✔ Clean & Sanitized Vehicles</li>
            <li>✔ 24x7 Customer Support</li>
            <li>✔ Professional Drivers</li>
            <li>✔ Transparent Pricing</li>
          </ul>
        </Paper>

        <Paper className="details-card contact" elevation={6} id="contact">
          <Typography variant="h5" gutterBottom color="primary" sx={{ mb: 2 }}>
            Contact Us
          </Typography>

          <Stack spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon color="action" />
              <Typography variant="body1"><strong>Phone:</strong> +91 7795516519</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <EmailIcon color="action" />
              <Typography variant="body1"><strong>Email:</strong> rajatravels@gmail.com</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocationOnIcon color="action" />
              <Typography variant="body1"><strong>Office:</strong> Bangalore, Karnataka, India</Typography>
            </Stack>
          </Stack>
        </Paper>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
