import { Box, Typography, Button, Grid } from "@mui/material";
import React from "react";
import pngegg from "../assets/pngegg 4.png";
import secondImg from "../assets/secondImg.png";
import thirdimg from "../assets/thirdimg.png";
import forth from "../assets/forth.png";

const HeroSection = () => {
  return (
    <>
      <Box
        xs={12}
        sm={12}
        sx={{
          width: "100%",
          height: "702px",
          flexShrink: 0,
          background:
            "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, rgba(18, 27, 33, 0.90) 100%)",
          background:
            "url(./Images/background.png), lightgray 50% / cover no-repeat",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#FFF",
            fontFamily: "Montserrat",
            fontSize: "72px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "130%",
            width: {md:"718px"},
            pl: "133px",
            pt: "245px",
          }}
        >
          Start your story with Olvera
        </Typography>
        <Button
          sx={{
            display: "inline-flex",
            height: "54px",
            padding: "20px 40px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
            borderRadius: "1000px",
            background: "#F837B7",
            color: "#000",
            textAlign: "center",
            fontFamily: " Plus Jakarta Sans",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "150%",
            left: {md:"133px"},
            // mt: "245px",
          }}
        >
          Contact Us
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "593px",
          flexShrink: 0,
          background: "#C2278E",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            px: "125px",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "72px",
              textTransform: "capitalize",
              display: "flex",
              position: "absolute",
              top: "131px",
              left: "125px",
            }}
          >
            About Olvera
          </Typography>
          <Typography
            sx={{
              width: "408px",
              color: "#FFF",
              fontFamily: "Archivo",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "30px",
              textTransform: "capitalize",
              position: "absolute",
              top: "214px",
              right: "122px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              position: "absolute",
              top: { sm: "379px", md: "379px", lg: "379px" },
              left: { sm: "125px", md: "125px", lg: "125px" },
              display:"flex",
              // justifyContent:"center",
              alignItems:"center"
            }}
          >
            <Grid
              item
              sx={{
                // position: { sm: "absolute", md: "absolute", lg: "absolute" },
                
              }}
            >
              <img src={pngegg} />
            </Grid>
            <Grid
              item
              sx={{ml:1
                // position: { sm: "absolute", md: "absolute", lg: "absolute" },
                // left: { sm: "102px", md: "102px", lg: "102px" },
              }}
            >
              <img src={secondImg} />
            </Grid>
            <Grid
              item
              sx={{
                ml:1
                // position: { sm: "absolute", md: "absolute", lg: "absolute" },
                // ml: { sm: "102px", md: "102px", lg: "102px" },
              }}
            >
              <img src={thirdimg} />
            </Grid>
            <Grid
              item
              sx={{
                ml:1
                // position: { sm: "absolute", md: "absolute", lg: "absolute" },
                // left: { sm: "125px", md: "125px", lg: "125px" },
              }}
            >
              <img src={forth} />
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifySelf: "center",
              position: "absolute",
              width: "50%",
              height: { xs: "100px", md: "586px", lg: "586px" },
              flexShrink: " 0",
              transform: "skewX(-216deg)",

              background:
                "linear-gradient(216deg, #871561 0%, rgba(194, 39, 142, 0.00) 100%)",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
