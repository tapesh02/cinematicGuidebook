import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import MobileNavBar from "./MobileNavBar";
import logo from "../../assets/logos/TransparentLogo.svg";

import { FaUserCircle } from "react-icons/fa";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";

const NavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const pageLinks = ["Home", "Movies", "TvShows"];
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            {!isMobile ? (
                <AppBar color="transparent" position="static" className="appBar">
                    <Container maxWidth="xl">
                        <Toolbar className="toolBar">
                            <Box>
                                <NavLink to={"/"}>
                                    <img src={logo} alt="logo" />
                                </NavLink>
                            </Box>
                            {isLoggedIn && (
                                <Box className="navBar">
                                    {pageLinks.map((page) => (
                                        <NavLink to={page.toLocaleLowerCase()} key={page}>
                                            <Button variant="outlined" color="secondary">
                                                {page}
                                            </Button>
                                        </NavLink>
                                    ))}
                                    <FaUserCircle />
                                </Box>
                            )}
                            {!isLoggedIn && (
                                <Box className="navBar">
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
