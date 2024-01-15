import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from './Form'
const Loginpage = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");

  return (
    <Box>
      <Typography
        backgroundColor={theme.palette.background.alt}
        fontWeight="bold"
        fontSize="32px"
        color="#33ab9f"
        width="100%"
        p="1rem 6%"
        textAlign="center"
      >
        socialpedia
      </Typography>

      <Box
        width={isNonMobileScreen ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{mb:"1.5rem"}} textAlign="center" fontSize="20px">
          Welcome to socialpedia , the social media to socialpaths!
        </Typography>
        <Form/>
      </Box>
    </Box>
  );
};

export default Loginpage;
