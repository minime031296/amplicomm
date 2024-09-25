import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { PiHandbagLight } from "react-icons/pi";
import MenuIcon from '@mui/icons-material/Menu'; 


const Navbar = () => {
  return (
    <Box>
      <AppBar position="relative">
        <Toolbar sx={{ bgcolor: "white" }}>
          <Box 
            sx={{ 
              display: 'flex', 
              height: "64px",
              justifyContent: "space-between",
              alignItems: "center", 
              width: '100%',
              maxWidth: '1200px', 
              margin: '0 auto',
            }}
          >
            <Box 
              sx={{ 
                height: "45px", 
                display: "flex", 
                alignItems: "center", 
              }} 
            >
              <img 
                src="https://hebronnutrition.com/cdn/shop/files/hebronnutrition_logo_84813b39-ab50-4e55-a187-dd448cecd02e_449x60.png?v=1623784594" 
                alt="Hebron Nutrition" 
                style={{ width: "50%" }} 
              />
            </Box>
            <Box 
              sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                height: "45px", 
                flexGrow: 1,
                justifyContent: "space-around", 
                alignItems: "center",
              }}
            >
              {['Home', 'Shop by brand', 'Shop by Category','Meet us CMO', 'Contact us'].map((item) => (
                <Box
                  key={item}
                  sx={{ 
                    height: "45px", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    marginLeft:"-20%",
                    flexGrow: 1,
                  }} 
                >
                  <Typography 
                    sx={{
                      color: "black", 
                      fontSize: { xs: "10px", sm: "12px", md: "16px", lg: "18px" },
                      overflowWrap: "break-word",
                      whiteSpace: "normal",
                    }}
                  >
                    <b>{item}</b>
                  </Typography>
                 
                </Box>
              ))}
            </Box>

            <Box 
              sx={{ 
                display: { xs: 'flex', md: 'none' }, 
                alignItems: 'center',
              }}
            >
              <IconButton>
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
            </Box>

            <Box 
              sx={{ 
                height: "45px", 
                display: "flex", 
                justifyContent: "flex-end", 
                alignItems: "center",
                gap: { xs: "5px", sm: "10px" }, 
              }} 
            >
              <IconButton sx={{ padding: 0 }}> 
                <SearchIcon sx={{ color: "black", fontSize: { xs: "20px", sm: "24px" } }} />
              </IconButton>
              <IconButton sx={{ padding: 0 }}>
                <PersonOutlineIcon sx={{ color: "black", fontSize: { xs: "20px", sm: "24px" } }} />
              </IconButton>
              <IconButton sx={{ padding: 0 }}>
                <PiHandbagLight style={{ color: "black", fontSize: "24px" }} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
