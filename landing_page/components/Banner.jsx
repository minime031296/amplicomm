import { Box } from '@mui/material'
import React from 'react'

const Banner = () => {
  return (
    <Box sx={{margin: "10px 75px",border:"1px solid black", height:"20vh"}}>
      <img src="https://healthyhey.com/cdn/shop/files/Website_Banner_with_Family_Desktop_2f0b36bf-405d-4c58-bd32-f4b49f6b4fe7.jpg?v=1716462023" alt="" 
      style={{height:"100%", width:"100%", objectFit:"cover"}}/>
    </Box>
  )
}

export default Banner
