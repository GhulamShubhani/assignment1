import {
  Box,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import pngegg4 from "../assets/pngegg 4.png";
import pngegg from "../assets/pngegg.png";
import secondImg from "../assets/secondImg.png";
import secondImgsx from "../assets/secondsx.png";
import thirdimg from "../assets/thirdimg.png";
import thirdimgsx from "../assets/thirdsx.png";
import forth from "../assets/forth.png";
import forthsx from "../assets/forthsx.png";

const HeroSection = () => {
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const ismediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box
        xs={12}
        sm={12}
        sx={{
          width: "100%",
          height: isExtraSmallScreen ? "522px" : "702px",
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
            fontSize: { xs: "42px", md: "72px" },
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "130%",
            width: { xs: "280px", md: "718px" },
            pl: { xs: "38px", md: "133px" },
            pt: { xs: "309px", md: "245px" },
          }}
        >
          Start your story with Olvera
        </Typography>
        <Button
          sx={{
            display: { md: "inline-flex", xs: "none" },
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
            left: { xs: "38px", md: "133px" },
            // mt: "245px",
          }}
        >
          Contact Us
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          height:{md: "593px",xs:"680px" ,sm:"680px"},
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
              top: { xs: "30px", md: "131px" },
              left: { xs: "120", md: "125px" },
            }}
          >
            About Olvera
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "39px",
              fontStyle: "normal",
              fontWeight: 800,
              lineHeight: "52px" /* 133.333% */,
              textTransform: "capitalize",
              display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
              position: "absolute",
              top: { xs: "110px", md: "131px" },
              left: { xs: "120", md: "125px" },
            }}
          >
            Change is the one true constant in business
          </Typography>
          <Typography
            sx={{
              width: { md: "408px" },
              color: "#FFF",
              fontFamily: "Archivo",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "30px",
              textTransform: "capitalize",
              display: { xs: "none", sm: "npne", md: "flex", lg: "flex" },
              position: "absolute",
              top: { xs: "350px", md: "214px" },
              right: { md: "122px" },
              // left: isExtraSmallScreen ? "68px" :"",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography
            sx={{
              width: { md: "408px" },
              color: "#FFF",
              fontFamily: "Archivo",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "30px",
              textTransform: "capitalize",
              display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
              justifyContent: "center",
              position: "absolute",
              top: { xs: "350px", md: "214px" },
              left: "31px",
              mr: 1,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>

         {!isExtraSmallScreen || !isSmallScreen && <Box spacing={2}
            sx={{
              position: "absolute",
              top: { xs: "459px", sm: "379px", md: "379px", lg: "379px" },
              left: { xs: "53px", sm: "125px", md: "125px", lg: "125px" },
              display: "flex",
              // justifyContent:"flex-start",
              alignItems: "center",
            }}>
            {/* <Box sx={{display: "flex", justifyContent:'center', alignItems:"center", gap:"55px"}}> */}


            <Grid container>
              <Grid item xs={6} md={3} sx={{display: "flex", justifyContent:'center', alignItems:"center",}}>
              <img src={pngegg4} sx={{ width: { xs: "96px" } }} />
              </Grid>
              <Grid item xs={6} md={3} sx={{display: "flex", justifyContent:'center', alignItems:"center",}} >
                <img src={secondImg} sx={{width:{xs:"196px"}}}  />
              </Grid>
              <Grid item xs={6} md={3} sx={{display: "flex", justifyContent:'center', alignItems:"center",}} >
                <img src={thirdimg} />
              </Grid>
              <Grid item xs={6} md={3} sx={{display: "flex", justifyContent:'center', alignItems:"center",}} >
                <img src={forth} />
              </Grid>
            </Grid>



            {/* </Box> */}
          </Box>}

          {isExtraSmallScreen || isSmallScreen ? <Box spacing={2}
            sx={{
              position: "absolute",
              top: { xs: "459px", sm: "379px", md: "379px", lg: "379px" },
              // left: { xs: "53px", sm: "53px" },
              display: "flex",
              // justifyContent:"flex-start",
              alignItems: "center",
            }}>
            {/* <Box sx={{display: "flex", justifyContent:'center', alignItems:"center", gap:"55px"}}> */}


            <Grid container>
              <Grid item xs={4} sm={4} md={3} sx={{ml:2,display: "flex",  alignItems:"center",}}>
              <img src={pngegg}  />
              </Grid>
              <Grid item xs={4} sm={4} md={3} sx={{display: "flex",  alignItems:"center",}} >
                <img src={secondImgsx}   />
              </Grid>
              <Grid item xs={4} sm={4} md={3} sx={{display: "flex",  alignItems:"center",}} >
                <img src={thirdimgsx} />
              </Grid>
              <Grid item xs={4} sm={4} md={3} sx={{display: "flex",  alignItems:"center",}} >
                <img src={forthsx} />
              </Grid>
            </Grid>



            {/* </Box> */}
          </Box> : <Box spacing={2}
            sx={{
              position: "absolute",
              top: { xs: "459px", sm: "379px", md: "379px", lg: "379px" },
              left: { xs: "53px", sm: "125px", md: "125px", lg: "125px" },
              display: "flex",
              // justifyContent:"flex-start",
              alignItems: "center",
            }}>
            {/* <Box sx={{display: "flex", justifyContent:'center', alignItems:"center", gap:"55px"}}> */}


            <Grid container>
              <Grid item xs={6} md={3} sx={{px:2,display: "flex", justifyContent:'center', alignItems:"center",}}>
              <img src={pngegg4}  />
              </Grid>
              <Grid item xs={6} md={3} sx={{ px:2,display: "flex", justifyContent:'center', alignItems:"center",}} >
                <img src={secondImg}  />
              </Grid>
              <Grid item xs={6} md={3} sx={{ pl:2,display: "flex", justifyContent:'center', alignItems:"center",}} >
                <img src={thirdimg} />
              </Grid>
              <Grid item xs={6} md={3} sx={{pl:2,display: "flex", justifyContent:'center', alignItems:"center",}} >
                <img src={forth} />
              </Grid>
            </Grid>



            {/* </Box> */}
          </Box>}

          <Box
            sx={{
              display: "flex",
              justifySelf: "center",
              position: "absolute",
              width: "50%",
              height: { xs: "678px", md: "586px", lg: "586px" },
              flexShrink: " 0",
              transform: { md: "skewX(-216deg)", xs: "skewX(-15deg)" },

              background:
                "linear-gradient(216deg, #871561 0%, rgba(194, 39, 142, 0.00) 100%)",
            }}
          ></Box>
        </Box>
      </Box>
      <Box>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            sx={{
              display: "flex", justifyContent: "left",
              flexDirection: "column",
              alignItems: "center",
              mt: 3
            }}
          >
            <Typography
              sx={{
                color: "#CC0E8C",
                fontFamily: "Montserrat Alternates",
                fontSize: { xs: "47px", sm: "47px", md: "62px" },
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "normal",
              }}
            >
              150+
            </Typography>
            <Typography
              sx={{
                color: "#292929",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              Projects
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 3
          }}>
            <Typography
              sx={{
                color: "#CC0E8C",
                fontFamily: "Montserrat Alternates",
                fontSize: { xs: "47px", sm: "47px", md: "62px" },
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "normal",
              }}
            >
              80+
            </Typography>
            <Typography
              sx={{
                color: "#292929",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              Clients
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 3
          }}>
            <Typography
              sx={{
                color: "#CC0E8C",
                fontFamily: "Montserrat Alternates",
                fontSize: { xs: "47px", sm: "47px", md: "62px" },
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "normal",
              }}
            >
              200
            </Typography>
            <Typography
              sx={{
                color: "#292929",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              Projects
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 3
          }}>
            <Typography
              sx={{
                color: "#CC0E8C",
                fontFamily: "Montserrat Alternates",
                fontSize: { xs: "47px", sm: "47px", md: "62px" },
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "normal",
              }}
            >
              97%
            </Typography>
            <Typography
              sx={{
                color: "#292929",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              Clients
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeroSection;
