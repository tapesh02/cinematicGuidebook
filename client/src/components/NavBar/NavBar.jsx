import React, { useContext, useState } from "react";
import { GlobalContext } from "../../useContext/Context";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import MobileNavBar from "./MobileNavBar";
import logo from "../../assets/logos/TransparentLogo.svg";
import SubMenu from "./SubMenu";

import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { getSessionStorage } from "../../helpers/helperFunctions";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { isLoggedIn } = useContext(GlobalContext);
  const [showMenuItem, setShowMenuItem] = useState(false);
  const pageLinks = ["Movies", "TvShows", "News"];

  const username = getSessionStorage("username");

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
                  <button className="profile-img-icon" onClick={() => setShowMenuItem(!showMenuItem)}>
                    <img
                      src={`https://eu.ui-avatars.com/api/?name=${username}&size=250`}
                      alt="profile-img"
                      className="user-icon"
                    />
                  </button>
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
