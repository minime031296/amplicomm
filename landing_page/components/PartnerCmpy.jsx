import { Box } from '@mui/material';
import React from 'react';
import './PartnerCmpy.css';

const PartnerCmpy = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8tSyjbHFwSJ1fcGlMIvTEVJxNC_V9IjTXg&s",
    "https://microbiomelabs.com/home/wp-content/uploads/2023/04/Microbiome-Labs_Purple.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Pendulum_logo.svg/2560px-Pendulum_logo.svg.png",
    "https://static.spacecrafted.com/a9b74f2eb21d4f3f9ddd8caa41c99ba9/i/ef577d5f9ec9431f8cb15f1a172dcecd/1/4SoifmQp45JMgBnHp7ed2/Pure%20Encapsulations%20Trans.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UvzB2ckSXSNKx70TrCMbyOV4ayrIf8cQqg&s"
  ];

  return (
    <Box 
      sx={{
        margin: { lg: "25px", md: "20px", sm: "5px", xs: "5px" },
        border: "",
        height: "20vh",
        display: 'flex', 
        alignItems: 'center', 
        overflowX: 'auto',
        justifyContent:"space-evenly"
      }}
    >
      {images.map((image, index) => (
        <Box key={index} sx={{ margin: '0 -2px' }}>
          <img src={image} alt={`Partner ${index}`} className="partner-image" />
        </Box>
      ))} 
    </Box>
  );
}

export default PartnerCmpy;
