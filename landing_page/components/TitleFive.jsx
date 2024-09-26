import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const TitleFive = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center", 
      margin: { xs: "2% 5%", sm: "3% 3%", md: "2% 2%", lg: "5% 5%" } 
    }}>
      <Typography 
        variant="h2"
        sx={{
          fontSize: { xs: "10px", sm: "12px", md: "16px", lg: "25px" },
          fontWeight: "bold",
          color: "black",
        }}
      >
        Deal of the day
      </Typography>
      <Button 
        variant="contained" 
        sx={{
          fontSize: { xs: "0.1em", sm: "0.2em", md: "0.5em", lg: "0.8em" },
          color: "white", 
          bgcolor: "purple", 
          height: "25px"
        }}
      >
        Know more
      </Button>
    </Box>
  );
}

export default TitleFive;
