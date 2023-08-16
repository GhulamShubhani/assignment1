import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Stack,
  Grid,
  useMediaQuery,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
// import { NavLink,  useNavigate } from "react-router-dom";

import Divider from "@mui/material/Divider";

import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";

const pages = ["Home", "Post Project", "Services", "Contact Us", "About Us"];
// const settings = ["Home","Profile",  "My Account", "Chat","Blogs","Favorites", "Logout"];

function Header() {
  //   const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [getCheckValue, setGetCheckValue] = useState(null);

  const [user, setUser] = useState("");
  const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [activeLink, setActiveLink] = useState("home");

  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Memoize the handleClick function using useCallback
  const handleClick = useCallback((link) => {
    setActiveLink(link);
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const pageNavigate = ["", "postProject", "services", "contact-us", "aboutus"];

  const avatarStyle = {
    width: 50,
    height: 50,
    bgcolor: "#fff",
    border: "2px solid red",
    color: "#000",
  };

  const handleItemClick = (pageUrl) => {
    setGetCheckValue(pageUrl);
    handleCloseUserMenu();
    // navigate(`${pageUrl}`);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              //   background: "red",
              p: 1,
              m: 1,
              borderTopRightRadius: "20px",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                // fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              <img src="https://anima-uploads.s3.amazonaws.com/projects/64dc5cfad478f5284874eecc/releases/64dc5d72aaf56ec7b6d2ba20/img/olvera-logo-black-1-1@2x.png" />
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {/* <NavLink to={`/${pageNavigate[index]}`}> */}
                  <Typography
                    textAlign="center"
                    sx={{
                      color: "purple",
                    }}
                  >
                    {page}
                  </Typography>
                  {/* </NavLink> */}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" } }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <img src="https://anima-uploads.s3.amazonaws.com/projects/64dc5cfad478f5284874eecc/releases/64dc5d72aaf56ec7b6d2ba20/img/olvera-logo-black-1-1@2x.png" />
          </Typography>
          <Box
            spacing={2}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            <Button
              color={activeLink === "home" ? "primary" : "inherit"}
              sx={{
                color:
                  activeLink === "home" ? "#1C1C1C" : "rgba(41, 41, 41, 0.75)",
                fontFamily: "Montserrat Alternates",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "24px" /* 150% */,
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                borderBottom:
                  activeLink === "home" ? "solid 1px red" : "transparent",
                "&:hover": {
                  backgroundColor: "red",
                  color: "#fff",
                },
              }}
              onClick={() => handleClick("home")}
              //   component={NavLink}
              //   to={"/"}
            >
              Home
            </Button>
            <Button
              color={activeLink === "postProject" ? "primary" : "inherit"}
              sx={{
                // borderRadius: "10px",
                color:
                  activeLink === "postProject"
                    ? "#1C1C1C"
                    : "rgba(41, 41, 41, 0.75)",
                fontFamily: "Montserrat Alternates",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "24px" /* 150% */,
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                borderBottom:
                  activeLink === "postProject"
                    ? "solid 1px red"
                    : "transparent",
                "&:hover": {
                  backgroundColor: "red",
                  color: "#fff",
                },
              }}
              onClick={() => handleClick("postProject")}
            >
              About Us
            </Button>
            <Button
              color={activeLink === "services" ? "primary" : "inherit"}
              sx={{
                color:
                  activeLink === "services"
                    ? "#1C1C1C"
                    : "rgba(41, 41, 41, 0.75)",
                fontFamily: "Montserrat Alternates",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "24px" /* 150% */,
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                borderBottom:
                  activeLink === "services" ? "solid 1px red" : "transparent",
                "&:hover": {
                  backgroundColor: "red",
                  color: "#fff",
                },
              }}
              onClick={() => handleClick("services")}
              //   component={NavLink}
              //   to={"/services"}
            >
              Our services
            </Button>
            <Button
              color={activeLink === "contact-us" ? "primary" : "inherit"}
              sx={{
                color:
                  activeLink === "contact-us"
                    ? "#1C1C1C"
                    : "rgba(41, 41, 41, 0.75)",
                fontFamily: "Montserrat Alternates",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "24px" /* 150% */,
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                borderBottom:
                  activeLink === "contact-us" ? "solid 1px red" : "transparent",
                "&:hover": {
                  backgroundColor: "red",
                  color: "#fff",
                },
              }}
              onClick={() => {
                handleClick("contact-us");
              }}
              //   component={NavLink}
              //   to={"/contact-us"}
            >
              Our experience
              {/* {user.type === "landlord" ? "Post Property" : "Post Ad"} */}
            </Button>
            <Button
              color={activeLink === "about-us" ? "primary" : "inherit"}
              sx={{
                color:
                  activeLink === "about-us"
                    ? "#1C1C1C"
                    : "rgba(41, 41, 41, 0.75)",
                fontFamily: "Montserrat Alternates",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "24px" /* 150% */,
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                borderBottom:
                  activeLink === "about-us" ? "solid 1px red" : "transparent",
                // "&:hover": {
                //   backgroundColor: "red",
                //   color: "#fff",
                // },
              }}
              onClick={() => handleClick("about-us")}
              //   component={NavLink}
              //   to={"/aboutus"}
            >
              Resources
            </Button>
            <Button
              color={activeLink === "about-us" ? "primary" : "inherit"}
              sx={{
                color: "var(--white, #FFF)",
                fontFamily: "Oswald",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "24px" /* 150% */,
                letterSpacing: "0.84px",
                textTransform: "uppercase",
                display: "flex",
                width: "170px",
                height: "45px",
                padding: "15px 38px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flexShrink: 0,
                borderRadius: "30px",
                background: "#C2278E",
              }}
              onClick={() => handleClick("about-us")}
            >
              Contact Us
            </Button>
            <Button
              sx={{
                color: "#2C2C2C",
                fontFamily: "Font Awesome 6 Brands",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
             <img src={facebook} />
            </Button>
            <Button
              sx={{
                color: "#2C2C2C",
                fontFamily: "Font Awesome 6 Brands",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
             <img src={instagram} />
            </Button>
            <Button
              sx={{
                color: "#2C2C2C",
                fontFamily: "Font Awesome 6 Brands",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              <img src={linkedin} />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
