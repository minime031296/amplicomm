import { Box, Input, Typography, Button } from '@mui/material'
import React from 'react'

const Footer = () => {
    const content = ["Why shop with us?", "Shipping", "Return", "About us"]
    const conte = ["Secure Website", "PCI Compliance", "Privacy Policy", "Terms of service"]
    const con = ["Invite customers to join your mailinglist."]
  return (
    <Box sx={{bgcolor:"#581972", width:"100%", height:"60vh", border:"", color:"white", display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center",}}>
      <Box>
        <Box variant="h1"><Typography>Company</Typography></Box>
        <Box>
        
            {content.map((cont, ind) => (
                <Typography  sx={{fontSize:{xs:"0.1em", sm:"0.2em", md:"0.5", lg:"0.8em"}, gap:"15px"}}>
                    {content[ind]}
                </Typography> 
            ))}
        
        </Box>
        
      </Box>

      <Box>
        <Box variant="h1"><Typography>Security & Privacy</Typography></Box>
        <Box>
        
            {conte.map((cont, ind) => (
                <Typography  sx={{fontSize:{xs:"0.1em", sm:"0.2em", md:"0.5", lg:"0.8em"}}}>
                    {conte[ind]}
                </Typography> 
            ))}
        
        </Box>
        
      </Box>
      
      <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:""}}>
      <Box variant="h1"><Typography>Subscribe</Typography></Box>
      <Box>
        
            {con.map((_, ind) => (
                <Typography  sx={{fontSize:{xs:"0.1em", sm:"0.2em", md:"0.5", lg:"0.8em"}, }}>
                    {con[ind]}
                </Typography> 
            ))}
        
        </Box>
        <Box sx={{bgcolor:"white"}}>
        <Input variant="contained" placeholder='Email address'></Input>
        </Box>

        <Box sx={{display:"flex", justifyContent:"flex-start"}}>
        <Button 
            variant="contained" 
            sx={{
            fontSize: {xs:"0.1em", sm:"0.2em", md:"0.4", lg:"0.6em" },
                width: "35%",
                height: "100%",
                bgcolor: "#450263", 
                color: "white",
                borderRadius:"white"
                }}
                >
                Signup
        </Button>
        </Box>
      </Box>
      
      <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"justify", }}>
        <Typography 
        sx={{ fontSize: {xs:"0.1em", sm:"0.3em", md:"0.5", lg:"0.8em" }, color:"white", overflowWrap:"break-word"}}>
        *Statements made on this website <br />
        have not been evaluated by the U.S. <br />

        Food and Drug Administration. <br />
        These products are not intended to <br />
        diagnose, treat, cure or prevent any <br />

        disease. Information provided by <br />
        this website or this company is not a <br />
        substitute for individual medical
        advice
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer

