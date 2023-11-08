import React, { useState } from "react";
import "./NavBar.scss";
import logo from "../../assets/logos/TransparentLogo.svg";

import { AppBar, Box, Button, Container, Toolbar  } from "@mui/material";

const NavBar = () => {
    const pageLinks = ["Home", "Movies", "Shows"];
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <AppBar color="transparent" position="static" className="appBar">
                <Container maxWidth="xl">
                    <Toolbar className="toolBar">
                        <Box>
                            <img src={logo} alt="logo" />
                        </Box>
                        {isLoggedIn && (
                            <Box className="navBar">
                                {pageLinks.map((page) => (
                                    <Button variant="outlined" color="secondary" key={page}>
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                        )}
                        <Box className="navBar">
                            <Button variant="outlined" color="secondary">
                                Sign In
                            </Button>
                            <Button variant="contained" color="secondary">
                                Join Us
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default NavBar;
