import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/TransparentLogo.svg";

import { FaUserCircle } from "react-icons/fa";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";

const NavBar = () => {
    const pageLinks = ["Home", "Movies", "TvShows"];
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AppBar color="transparent" position="static" className="appBar">
            <Container maxWidth="xl">
                <Toolbar className="toolBar">
                    <Box>
                        <img src={logo} alt="logo" />
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
                            <Button variant="contained" color="secondary">
                                Join Us
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
