import { Box, Typography } from '@mui/material'
import React from 'react'

const TitleThree = () => {
  return (
    <Box sx={{

    }}>
      <Typography 
      variant="h2"
      sx={{ fontSize:{ xs: "10px", sm: "12px", md: "16px", lg: "25px" },
            fontWeight:"bold",
            color:"black",
            marginTop:{xs:"2%",  sm: "3%", md: "2%", lg: "5%" },
            marginLeft:{xs:"5%",  sm: "3%", md: "2%", lg: "5%" }
        }}
      >
        Proven Bestsellers
      </Typography>
    </Box>
  )
}

export default TitleThree
