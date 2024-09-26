import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Box, Typography, Button } from '@mui/material';
import { IoLogoYoutube } from "react-icons/io5";

const Youtube = () => {
  return (
    <div>
      <Carousel 
        showArrows={true} 
        interval={3000} 
        infiniteLoop 
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <Box position="relative" sx={{ height: "50vh", overflow: "hidden", borderRadius:"20px" }}>
            <img 
              src="https://d1ize34iqy408p.cloudfront.net/images/Health-e_press_release-2400x1060_vertical_lo.width-2560_Sr6HW9n.webp" 
              alt="Description for Image 1" 
              style={{ 
                width: '90%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius:"10px"
              }} 
            />
            <Typography 
              variant="h4" 
              sx={{
                fontSize: { xs: "8px", sm: "10px", lg: "35px", md: "15px" },
                overflowWrap: "break-word",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "red",
                opacity: 0.9,
                zIndex: 1
              }}
            >
              <IoLogoYoutube />
            </Typography>
            
          </Box>
        </div>
      
      </Carousel>
    </div>
  );
}

export default Youtube;
