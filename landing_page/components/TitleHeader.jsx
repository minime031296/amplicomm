import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const TitleHeader = () => {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "#05044c", 
            height: "16px",
            minHeight: "14px",
            padding: "0px",
            justifyContent:"center"
            }}
            > 
          <Typography
            sx={{
              color: { xs: "white", sm: "white", lg: "white", md: "white" },
              textAlign: { xs: "center", sm: "center", lg: "center", md: "center" },
              overflowWrap: "break-word",
              whiteSpace: "normal",
              fontSize:{ xs: "10px", sm: "12px", md: "16px", lg: "18px" }
            }}
          >
            Worldwide Shipping - Duties and Taxes Prepaid
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TitleHeader;
