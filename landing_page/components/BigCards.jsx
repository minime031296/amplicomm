import { Box, Typography, Button } from '@mui/material';
import React from 'react';

const BigCards = () => {
  return (
    <Box 
      sx={{
        margin: "10px 75px",
        border: "",
        height: "80vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "row"
      }}
    >
      <Box 
        sx={{
          margin: "100px 0px",
          border: "",
          height: "70%",
          width: "45%",
          overflow: "hidden",
          borderRadius: "8px" 
        }}
      >
        <img 
          src="https://cms-api-in.myhealthcare.co/image/20220910103120.jpeg" 
          alt="health image" 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover" 
          }} 
        />
      </Box>
      <Box 
        sx={{
          margin: "100px 0px",
          border: "",
          height: "70%",
          width: "50%"
        }}
      >
        <Box 
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "column",
            margin: { xs: "2% 5%", sm: "3% 3%", md: "2% 2%", lg: "5% 5%" } 
          }}
        >
          <Typography 
            variant="h2"
            sx={{
              fontSize: { xs: "10px", sm: "12px", md: "16px", lg: "25px" },
              fontWeight: "bold",
              color: "black",
              marginTop:"-10px"
            }}
          >
            Deal of the day
          </Typography>
          <Typography 
            variant="body1" 
            sx={{
              fontSize: { xs: "0.1em", sm: "0.2em", md: "0.5em", lg: "1em" },
              color: "black",
              marginTop: "15px"
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum eum doloribus consequuntur. Facilis deleniti reprehenderit sunt consequatur quo odit iste iusto quos repellat aliquid sit sint tempore, quod dolorem!
            Excepturi officia, illum culpa voluptatibus sunt eius assumenda ea laborum natus delectus totam aliquam reiciendis atque explicabo voluptatem distinctio, fugiat accusantium mollitia? Cumque ipsum enim ipsam architecto cum eaque soluta.
            Dolore quod dolores dicta error ratione similique accusantium illum, quasi harum modi, animi neque suscipit aliquam? Et ducimus consectetur sed, alias, delectus placeat est veritatis, molestias tempora consequuntur impedit enim.
            
          </Typography>
          <Button 
            variant="contained" 
            sx={{
              fontSize: { xs: "0.1em", sm: "0.2em", md: "0.5em", lg: "0.8em" },
              color: "white", 
              bgcolor: "purple", 
              height: "35px",
              marginTop:{xs: "25px", sm: "25px", md: "25px", lg: "75px"},
              width:"30%"
            }}
          >
            Lorem ipsum
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default BigCards;
