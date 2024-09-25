import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Box, Typography, Button } from '@mui/material';

const Slider = () => {
  return (
    <div>
      <Carousel 
        showArrows={true} 
        interval={3000} 
        infiniteLoop 
        autoPlay
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <Box position="relative">
            <img 
              src="https://hebronnutrition.com/cdn/shop/files/3_a3c3672f-bd40-4984-b7f4-9e16d6_1896x1053.png?v=1655420182" 
              alt="Description for Image 1" 
              style={{ width: '100%' }} 
            />
            <Typography 
              variant="h4" 
              sx={{
                fontSize:{ xs: "8px", sm: "10px", lg: "35px", md: "15px" },
                overflowWrap: "break-word",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#ffffff",
                opacity:0.9,
                zIndex: 1
              }}
            >
              Digestive and GI
            </Typography>
            <Button 
              variant="contained" 
              sx={{
                fontSize:{ xs: "5px", sm: "5px", lg: "20px", md: "10px" },
                position: "absolute",
                width:"10%",
                height:"7%",
                top: "60%",
                left: "50%",
                transform: "translate(-50%, -50%)", 
                bgcolor: "#450263", 
                color: "white",
                zIndex: 1
              }}
            >
              Shop Now
            </Button>
          </Box>
        </div>
        <div>
          <Box position="relative">
            <img 
              src="https://www.hebronnutritio.shop/wp-content/uploads/2024/08/4_1350x750_9cae0a9d-92e8-432f-a10e-f3d272220b10_504x280.png" 
              alt="Description for Image 2" 
              style={{ width: '100%' }} 
            />
            <Typography 
              variant="h4" 
              sx={{
                fontSize:{ xs: "8px", sm: "10px", lg: "35px", md: "15px" },
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)", 
                color: "#ffffff",
                opacity:0.9,
                zIndex: 1
              }}
            >
              Immune System
            </Typography>
            <Button 
              variant="contained" 
              sx={{
                fontSize:{ xs: "5px", sm: "5px", lg: "20px", md: "10px" },
                position: "absolute",
                width:"10%",
                height:"7%",
                top: "50%", 
                left: "50%",
                transform: "translate(-50%, -50%)", 
                bgcolor: "#450263", 
                color: "white",
                zIndex: 1
              }}
            >
              Shop Now
            </Button>
          </Box>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
