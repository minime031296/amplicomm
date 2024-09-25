import { Box, Typography } from '@mui/material'
import React from 'react'

const Title = () => {
  return (
    <Box sx={{

    }}>
      <Typography 
      variant="h3"
      sx={{ fontSize:{ xs: "10px", sm: "12px", md: "16px", lg: "25px" },
            fontWeight:"bold",
            color:"black",
            marginTop:"2%",
            marginLeft:"5%"
        }}
      >
        Top Brands
      </Typography>
    </Box>
  )
}

export default Title
