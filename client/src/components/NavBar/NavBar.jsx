import React, { useContext, useState } from "react";
import { GlobalContext } from "../../useContext/Context";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import MobileNavBar from "./MobileNavBar";
import logo from "../../assets/logos/TransparentLogo.svg";
import SubMenu from "./SubMenu";

import { FaUserCircle } from "react-icons/fa";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { isLoggedIn } = useContext(GlobalContext);

  const [showMenuItem, setShowMenuItem] = useState(false);

  const pageLinks = ["Movies", "TvShows", "News"];

  return (
    <>
      {!isMobile ? (
        <AppBar color="transparent" position="static" className="app-bar">
          <Container maxWidth="xl">
            <Toolbar className="tool-bar">
              <Box>
                <NavLink to={"/"}>
                  <img src={logo} alt="logo" />
                </NavLink>
              </Box>
              {isLoggedIn && (
                <Box className="nav-bar">
                  {pageLinks.map((page) => (
                    <NavLink to={page.toLocaleLowerCase()} key={page}>
                      <Button variant="outlined" color="secondary">
                        {page}
                      </Button>
                    </NavLink>
                  ))}
                  <FaUserCircle size={30} onClick={() => setShowMenuItem(!showMenuItem)} className="menu-icon" />
                  {showMenuItem && <SubMenu showMenuItem={showMenuItem} setShowMenuItem={setShowMenuItem} />}
                </Box>
              )}
              {!isLoggedIn && (
                <Box className="nav-bar">
                  <NavLink to={"/signin"}>
                    <Button variant="outlined" color="secondary">
                      Sign In
                    </Button>
                  </NavLink>
                  <NavLink to={"/joinus"}>
                    <Button variant="contained" color="secondary">
                      Join Us
                    </Button>
                  </NavLink>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      ) : (
        <MobileNavBar />
      )}
    </>
  );
};

export default NavBar;
