import React, { useState } from "react";
import logo from "../../assets/logos/TransparentLogo.svg";

import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const pageLinks = ["Home", "Movies", "TvShows", "Profile"];
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
                        </Box>
                    )}
                    {!isLoggedIn && (
                        <Box className="navBar">
                            <Button variant="outlined" color="secondary" onClick={() => setIsLoggedIn(true)}>
                                Sign In
                            </Button>
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
