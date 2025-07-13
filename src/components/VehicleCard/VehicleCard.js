import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Modal,
  Box,
  Stack,
  Divider,
  Chip,
  Tooltip,
} from '@mui/material';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InfoIcon from '@mui/icons-material/Info';
import RouteIcon from '@mui/icons-material/Route';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import './VehicleCard.scss';

const VehicleCard = ({ vehicle, distance }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Card className="vehicle-card" onClick={() => setOpen(true)}>
        <CardMedia
          component="img"
          image={vehicle.image}
          alt={vehicle.name}
          className="vehicle-image"
        />
        <CardContent className="vehicle-content">
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <DirectionsCarIcon color="primary" />
              <Typography variant="h6" fontWeight={600}>
                {vehicle.name}
              </Typography>
            </Stack>
            <Typography variant="body2" className="truncate-text">
              {vehicle.description}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="body2">
                <strong>Total Cost: ₹{vehicle.totalCost}</strong>
              </Typography>
            </Stack>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              startIcon={<InfoIcon />}
              onClick={handleOpen}
            >
              View Details
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box">
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h5" fontWeight={600}>
                {vehicle.name}
              </Typography>
              <Tooltip title="Close">
                <Button onClick={handleClose} size="small">
                  <CloseIcon />
                </Button>
              </Tooltip>
            </Stack>

            <img src={vehicle.image} alt={vehicle.name} className="modal-image" />

            <Typography variant="body1">{vehicle.description}</Typography>
            <Divider />

            <Stack spacing={1}>
              <Typography variant="body2">
                <RouteIcon fontSize="small" /> <strong>Distance:</strong> {distance} KM
              </Typography>
              <Typography variant="body2">
                ₹15/KM: ₹{distance * 15}
              </Typography>
              <Typography variant="body2">
                <strong>Driver & Misc:</strong> ₹{vehicle.baseRent}
              </Typography>
              <Typography variant="body2" color="primary" fontWeight={600}>
                <strong>Total Cost:</strong> ₹{vehicle.totalCost}
              </Typography>
            </Stack>

            <Divider />

            <Typography variant="subtitle1" fontWeight={600}>
              <CancelIcon fontSize="small" /> Excludes:
            </Typography>
            <ul>
              <li>Toll Fees</li>
              <li>State Taxes</li>
              <li>Parking Fees</li>
              <li>Driver Night Charges</li>
            </ul>

            <Button
              variant="contained"
              fullWidth
              color="primary"
              onClick={handleClose}
            >
              Close
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default VehicleCard;
