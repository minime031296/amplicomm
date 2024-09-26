import React from 'react'
import { Box, Typography } from '@mui/material';

const ImagesCardsTwo = () => {
    const images = [
        "https://img.freepik.com/premium-photo/bottle-pills-is-poured-out-white-bottle_916191-4198.jpg",
        "https://www.medikonda.com/cdn/shop/products/moringa-oil-softgel-capsules_d4bb92d8-5ef3-4f4b-8a9e-ef69e7a5b9d4_600x.jpg?v=1587577408",
        "https://eastindiapharmashop.com/wp-content/uploads/2019/07/livotone-capsule-east-india-003.png",
        "https://thumb.ac-illust.com/38/38469db6e56724f59e59d594c3847458_t.jpeg",
        "https://img.freepik.com/premium-photo/white-medicine-bottle-filled-with-capsules-depicted-detailed-3d-rendering_896558-9148.jpg"
    ];

    const titles = [
        "Diabetes", "Heart Care", "Stomach Care", "Liver care", "Bone, Joint & Muscle Care"
    ];
  return (
    <Box sx={{ margin: "10px 75px", display: "flex", justifyContent: "space-around", alignItems: "center", height: "30vh" }}>
    {images.map((image, index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{
                width: {xs:"50px", sm:"50px", md:"100px", lg:"150px"}, 
                height: {xs:"50px", sm:"50px", md:"100px", lg:"150px"}, 
                borderRadius: '20%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 1, 
                aspectRatio:"100px"
            }}>
                <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Typography sx={{ textAlign: 'center', fontSize: {xs:"0.1em", sm:"0.2em", md:"0.8em", lg:"1.2em"} }}>
                {titles[index]}
            </Typography>
        </Box>
    ))}
</Box>
  )
}

export default ImagesCardsTwo
