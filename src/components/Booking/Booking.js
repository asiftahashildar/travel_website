import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  Button,
  Typography,
  Grid,
  Paper,
  Divider,
  InputAdornment,
  FormControlLabel,
  Switch
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsIcon from '@mui/icons-material/Directions';

import destinations from '../../data/destinations';
import distances from '../../data/distances';
import vehicles from '../../data/vehicles';
import VehicleCard from '../VehicleCard/VehicleCard';
import './Booking.scss';

const today = new Date().toISOString().split('T')[0];

const Booking = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: today,
    isRoundTrip: false,
    returnDate: today,
  });

  const [tripDetails, setTripDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.from && formData.to && formData.from !== formData.to) {
      let distance = distances[`${formData.from}-${formData.to}`]
        || distances[`${formData.to}-${formData.from}`]
        || 300;

      if (formData.isRoundTrip) distance *= 2;

      setTripDetails({
        distance,
        totalCostPerKm: distance * 15
      });
    } else {
      alert("Please select different From and To places.");
    }
  };

  return (
    <div className="booking-container">
      <Paper elevation={6} className="booking-form-paper">
        <Typography variant="h4" className="booking-title" sx={{mb:3, fontWeight:700}}>
          {/* <DirectionsIcon fontSize="large" /> */}
           Plan Your Trip
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                size="small"
                fullWidth
                label="From"
                name="from"
                value={formData.from}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon color="primary" />
                    </InputAdornment>
                  )
                }}
              >
                {destinations.map((d, idx) => (
                  <MenuItem key={idx} value={d.name}>{d.name}</MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                size="small"
                fullWidth
                label="To"
                name="to"
                value={formData.to}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon color="error" />
                    </InputAdornment>
                  )
                }}
              >
                {destinations.map((d, idx) => (
                  <MenuItem key={idx} value={d.name}>{d.name}</MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                type="date"
                size="small"
                fullWidth
                label="Journey Date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonthIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControlLabel
                control={
                  <Switch
                    name="isRoundTrip"
                    checked={formData.isRoundTrip}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label="Round Trip"
                labelPlacement="start"
              />
            </Grid>

            {formData.isRoundTrip && (
              <Grid item xs={12}>
                <TextField
                  type="date"
                  size="small"
                  fullWidth
                  label="Return Date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <KeyboardReturnIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                endIcon={<DirectionsCarIcon />}
              >
                Show Available Vehicles
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {tripDetails && (
        <div className="vehicles-list">
          <Typography variant="h6" gutterBottom color="primary" sx={{fontWeight: 700}}>
            Distance: {tripDetails.distance} KM | Estimated Cost: ₹{tripDetails.totalCostPerKm}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Grid container spacing={2}>
            {vehicles.map((vehicle, idx) => (
              <Grid item xs={12} sm={6} md={6} key={idx} sx={{ display: 'flex' }}>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                  <VehicleCard
                    vehicle={{
                      ...vehicle,
                      totalCost: tripDetails.totalCostPerKm + vehicle.baseRent
                    }}
                    distance={tripDetails.distance}
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Booking;
