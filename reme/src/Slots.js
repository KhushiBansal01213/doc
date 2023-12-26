import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const AvailableSlotsBoxes = ({ availableSlots }) => {
  const boxCount = availableSlots;
  const startTime = new Date();
  startTime.setHours(10, 0, 0); // Set start time to 10:00 AM

  const boxes = Array.from({ length: boxCount }, (_, index) => {
    const currentTime = new Date(startTime.getTime() + index * 15 * 60 * 1000);
    const formattedTime = currentTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

    return (
      <Grid item key={index} xs={4} >
        <Box
          sx={{
            height: '30px',
            width: '280px',
            border: '1px solid black',
            marginTop:"-0.5rem",
            marginLeft: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '0.5rem',
            borderColor: 'lightGray',
          }}
        >
          {formattedTime}
        </Box>
      </Grid>
    );
  });

  return (
    <Grid container spacing={2} style={{ width: '60rem',marginTop: '1rem', }}>
      {boxes}
    </Grid>
  );
};

export default AvailableSlotsBoxes;
