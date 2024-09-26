import { Box, Button, Typography } from '@mui/material'; 
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Multicard = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <Box sx={{ margin: "10px 75px" }}>
            <Carousel responsive={responsive}>
                <Box sx={{
                    padding: '0',
                    background: '#fffff',
                    borderRadius: '8px',
                    width: "55%",
                    height: "45vh",
                    margin: "0 5px",
                    display: "flex",
                    flexDirection: "column",
                    
                }}>
                    <Box
                        sx={{
                            width: "100%",
                            height: "90%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <img 
                            src="https://calroy.com/wp-content/uploads/2023/04/Arterosil-HP-Bottle.png" 
                            alt="Arterosil 60 capsules" 
                            style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: "10%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            padding: "5px 10px" 
                        }}
                    >
                        <Typography sx={{ color: "black", fontSize: {xs:"0.1em", sm:"0.5em", md:"0.8", lg:"1em"}, whiteSpace: "nowrap" }}>
                            Arterosil HP by Calroy
                        </Typography>
                        <Typography sx={{ color: "black", fontSize: {xs:"0.1em", sm:"0.5em", md:"0.8", lg:"1em"},whiteSpace: "nowrap" }}>
                           
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: "10%",
                            display: "flex",
                            justifyContent: "flex-start",
                            padding: "5px 10px"
                        }}
                    >
                        <Typography sx={{ color: "#05044c", fontSize: {xs:"0.1em", sm:"0.5em", md:"0.8", lg:"1em"}, margin:"12px 0" }}>
                            Arterosil
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: "10%",
                            display: "flex",
                            justifyContent: "flex-start",
                            padding: "5px 10px"
                        }}
                    >
                        <Typography sx={{ color: "#05044c", fontWeight: "bold", fontSize: {xs:"0.1em", sm:"0.2em", md:"0.8", lg:"1em" } }}>
                            Rs. 99.00
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: "10%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Button 
                            variant="contained" 
                            sx={{
                                fontSize: {xs:"0.1em", sm:"0.2em", md:"0.8", lg:"0.8em" },
                                width: "95%",
                                height: "100%",
                                bgcolor: "#450263", 
                                color: "white",
                            }}
                        >
                            Add To Cart
                        </Button>
                    </Box>
                </Box>

                
                <Box sx={{
                    padding: '0',
                    background: '#fffff',
                    borderRadius: '8px',
                    width: "55%",
                    height: "45vh",
                    margin: "0 5px",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <Box
                        sx={{
                            width: "100%",
                            height: "90%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <img 
                            src="https://cytomatrix.ca/wp-content/uploads/products/Nattokinase.png" 
                            alt="Nattokinase" 
                            style={{ width: "60%", height: "100%", objectFit: "contain" }} 
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: "10%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            padding: "5px 10px" 
                        }}
                    >
                        <Typography sx={{ color: "black", fontSize: { xs: "0.1em", sm: "0.5em", md: "0.8em", lg: "1em" }, whiteSpace: "nowrap" }}>
                            Allergy Research Group
                        </Typography>
                        <Typography sx={{ color: "black", fontSize: { xs: "0.1em", sm: "0.5em", md: "0.8em", lg: "1em" }, whiteSpace: "nowrap" }}>
                            Nattokinase
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: "10%",
                            display: "flex",
                            justifyContent: "flex-start",
                            padding: "5px 10px"
                        }}
                    >
                        <Typography sx={{ color: "#05044c", fontSize: { xs: "0.1em", sm: "0.2em", md: "0.5em", lg: "0.8em" }, margin: "12px 0" }}>
                            Allergy Research Group
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: "10%",
                            display: "flex",
                            justifyContent: "flex-start",
                            padding: "5px 10px",
                            gap: "5px"
                        }}
                    >
                        <Typography sx={{ color: "#05044c", fontWeight: "bold", textDecoration: "line-through", fontSize: { xs: "0.1em", sm: "0.5em", md: "0.8em", lg: "1em" } }}>
                            Rs. 115.99
                        </Typography>
                        <Typography sx={{ color: "red", fontWeight: "bold", fontSize: { xs: "0.1em", sm: "0.5em", md: "0.8em", lg: "1em" } }}>
                            Rs. 84.00
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: "10%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Button 
                            variant="contained" 
                            sx={{
                                fontSize: { xs: "0.1em", sm: "0.2em", md: "0.8em", lg: "0.8em" },
                                width: "95%",
                                height: "100%",
                                bgcolor: "#450263", 
                                color: "white",
                            }}
                        >
                            Add To Cart
                        </Button>
                    </Box>
                </Box>

                <Box sx={{
                        padding: '0',
                        background: '#fffff',
                        borderRadius: '8px',
                        width: "55%",
                        height: "45vh",
                        margin: "0 5px",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <Box
                            sx={{
                                width: "100%",
                                height: "90%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <img 
                                src="https://m.media-amazon.com/images/I/71JPfXzvOWL.jpg" 
                                alt="ProOmega 2000" 
                                style={{ width: "70%", height: "100%", objectFit: "contain" }} 
                            />
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                height: "10%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                padding: "5px 10px" 
                            }}
                        >
                            <Typography sx={{ color: "black", fontSize: { xs: "0.1em", sm: "0.5em", md: "0.8em", lg: "1em" }, whiteSpace: "nowrap" }}>
                                Nordic Naturals ProOmega
                            </Typography>
                            <Typography sx={{ color: "black", fontSize: { xs: "0.1em", sm: "0.5em", md: "0.8em", lg: "1em" } }}>
                                2000
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                height: "10%",
                                display: "flex",
                                justifyContent: "flex-start",
                                padding: "5px 10px"
                            }}
                        >
                            <Typography sx={{ color: "#05044c", fontSize: { xs: "0.1em", sm: "0.5em", md: "0.8em", lg: "1em" }, margin: "12px 0" }}>
                                Nordic Naturals
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                height: "10%",
                                display: "flex",
                                justifyContent: "flex-start",
                                padding: "5px 10px"
                            }}
                        >
                            <Typography sx={{ color: "#05044c", fontWeight: "bold", fontSize: { xs: "0.1em", sm: "0.1em", md: "0.5em", lg: "0.6em" } }}>
                                Rs. 62.44 - Rs. 112.99
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                height: "10%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Button 
                                variant="contained" 
                                sx={{
                                    fontSize: { xs: "0.1em", sm: "0.2em", md: "0.8em", lg: "0.8em" },
                                    width: "95%",
                                    height: "100%",
                                    bgcolor: "#450263", 
                                    color: "white",
                                }}
                            >
                                Add To Cart
                            </Button>
                        </Box>
                    </Box>


                    <Box sx={{
                padding: '0',
                background: '#fffff',
                borderRadius: '8px',
                width: "55%",
                height: "45vh",
                margin: "0 5px",
                display: "flex",
                flexDirection: "column"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "90%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img 
                        src="https://hebronnutrition.com/cdn/shop/products/410V8a39orL_grande.jpg?v=1652240188" 
                        alt="Ashwagandha" 
                        style={{ width: "60%", height: "100%", objectFit: "contain" }} 
                    />
                </Box>
                <Box sx={{
                    width: "100%",
                    height: "10%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "5px 10px" 
                }}>
                    <Typography sx={{ color: "black", fontSize: { xs: "0.1em", sm: "0.2em", md: "0.5em", lg: "0.9em" }, whiteSpace: "nowrap" }}>
                        Pure Encapsulations
                    </Typography>
                    <Typography sx={{ color: "black", fontSize: { xs: "0.1em", sm: "0.2em", md: "0.5em", lg: "0.9em" } }}>
                        Magnesium (glycinate)
                    </Typography>
                </Box>
                <Box sx={{
                    width: "100%",
                    height: "10%",
                    display: "flex",
                    justifyContent: "flex-start",
                    padding: "5px 10px"
                }}>
                    <Typography sx={{ color: "#05044c", fontSize: { xs: "0.1em", sm: "0.2em", md: "0.8em", lg: "1em" }, margin: "12px 0" }}>
                        Pure Encapsulations
                    </Typography>
                </Box>
                <Box sx={{
                    width: "100%",
                    height: "10%",
                    display: "flex",
                    justifyContent: "flex-start",
                    padding: "5px 10px"
                }}>
                    <Typography sx={{ color: "#05044c", fontWeight: "bold", fontSize: { xs: "0.1em", sm: "0.2em", md: "0.5em", lg: "0.9em" } }}>
                        Rs. 30.36 - Rs. 97.44
                    </Typography>
                </Box>
                <Box sx={{
                    width: "100%",
                    height: "10%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Button 
                        variant="contained" 
                        sx={{
                            fontSize: { xs: "0.1em", sm: "0.2em", md: "0.5em", lg: "0.8em" },
                            width: "95%",
                            height: "100%",
                            bgcolor: "#450263", 
                            color: "white",
                        }}
                    >
                        Add To Cart
                    </Button>
                </Box>
            </Box>

<Box sx={{
    padding: '0',
    background: '#fffff',
    borderRadius: '8px',
    width: "55%",
    height: "45vh",
    margin: "0 5px",
    display: "flex",
    flexDirection: "column"
}}>
    <Box sx={{
        width: "100%",
        height: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <img 
            src="https://hebronnutrition.com/cdn/shop/products/2302920e-d8e0-4d50-8215-87f1df75a929_700x700.png?v=1625769674" 
            alt="O.N.E mutlivitamin" 
            style={{ width: "60%", height: "100%", objectFit: "contain" }} 
        />
    </Box>
    <Box sx={{
        width: "100%",
        height: "10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "5px 10px" 
    }}>
        <Typography sx={{ color: "black", fontSize: { xs: "0.1em", sm: "0.2em", md: "0.8em", lg: "1em" }, whiteSpace: "nowrap" }}>
            Pure Encapsulations O.N.E
        </Typography>
        <Typography sx={{ color: "black", fontSize: { xs: "0.1em", sm: "0.2em", md: "0.8em", lg: "1em" } }}>
            Multivitamin
        </Typography>
    </Box>
    <Box sx={{
        width: "100%",
        height: "10%",
        display: "flex",
        justifyContent: "flex-start",
        padding: "5px 10px"
    }}>
        <Typography sx={{ color: "#05044c", fontSize: { xs: "0.1em", sm: "0.2em", md: "0.5em", lg: "0.8em" }, margin: "12px 0" }}>
            Pure Encapsulations
        </Typography>
    </Box>
    <Box sx={{
        width: "100%",
        height: "10%",
        display: "flex",
        justifyContent: "flex-start",
        padding: "5px 10px"
    }}>
        <Typography sx={{ color: "#05044c", fontWeight: "bold", fontSize: { xs: "0.1em", sm: "0.2em", md: "0.5em", lg: "0.8em" } }}>
            Rs. 26.76
        </Typography>
    </Box>
    <Box sx={{
        width: "100%",
        height: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Button 
            variant="contained" 
            sx={{
                fontSize: { xs: "0.1em", sm: "0.2em", md: "0.5em", lg: "0.8em" },
                width: "95%",
                height: "100%",
                bgcolor: "#450263", 
                color: "white",
            }}
        >
            Add To Cart
        </Button>
    </Box>
</Box>


<Box sx={{
    padding: '0',
    background: '#fffff',
    borderRadius: '8px',
    width: "55%",
    height: "45vh",
    margin: "0 5px",
    display: "flex",
    flexDirection: "column"
}}>
    <Box sx={{
        width: "100%",
        height: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <img 
            src="https://hebronnutrition.com/cdn/shop/products/2302920e-d8e0-4d50-8215-87f1df75a929_700x700.png?v=1625769674" 
            alt="O.N.E mutlivitamin" 
            style={{ width: "60%", height: "100%", objectFit: "contain" }} 
        />
    </Box>
    <Box sx={{
        width: "100%",
        height: "10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "5px 10px" 
    }}>
        <Typography sx={{ color: "black", fontSize: { xs: "0.1em", sm: "0.2em", md: "0.8em", lg: "1em" }, whiteSpace: "nowrap" }}>
            Pure Encapsulations O.N.E
        </Typography>
        <Typography sx={{ color: "black", fontSize: { xs: "0.1em", sm: "0.2em", md: "0.8em", lg: "1em" } }}>
            Multivitamin
        </Typography>
    </Box>
    <Box sx={{
        width: "100%",
        height: "10%",
        display: "flex",
        justifyContent: "flex-start",
        padding: "5px 10px"
    }}>
        <Typography sx={{ color: "#05044c", fontSize: { xs: "0.1em", sm: "0.2em", md: "0.5em", lg: "0.8em" }, margin: "12px 0" }}>
            Pure Encapsulations
        </Typography>
    </Box>
    <Box sx={{
        width: "100%",
        height: "10%",
        display: "flex",
        justifyContent: "flex-start",
        padding: "5px 10px"
    }}>
        <Typography sx={{ color: "#05044c", fontWeight: "bold", fontSize: { xs: "0.1em", sm: "0.2em", md: "0.5em", lg: "0.8em" } }}>
            Rs. 26.76
        </Typography>
    </Box>
    <Box sx={{
        width: "100%",
        height: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Button 
            variant="contained" 
            sx={{
                fontSize: { xs: "0.1em", sm: "0.2em", md: "0.5em", lg: "0.8em" },
                width: "95%",
                height: "100%",
                bgcolor: "#450263", 
                color: "white",
            }}
        >
            Add To Cart
        </Button>
    </Box>
</Box>


                
                

            </Carousel>
        </Box>
    );
}

export default Multicard;
