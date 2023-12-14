import React from "react";
import { Button, TextField, Typography } from "@mui/material";

const JoinUs = () => {
    return (
        <>
            <div className="signinBgOverlay"></div>
            <div className="signinBg"></div>
            <div className="headerSection">
                <Typography variant="h4" className="header">
                    Unlock a world of endless entertainment
                </Typography>
                <Typography variant="h6" className="subheader">
                    Join us to Discover, Stream and Enjoy!
                </Typography>
            </div>
            <div className="signinSections">
                <div className="signinSection1">
                    <Typography variant="subtitle1" className="fromTitle">
                        Join Us
                    </Typography>
                </div>
                <div className="signinSection2">
                    <TextField label="Username" variant="filled" />
                    <TextField label="Email" variant="filled" />
                    <TextField label="Create Password" variant="filled" />
                </div>

                <div className="signinSection4">
                    <Button variant="contained" color="primary">
                        Join Us
                    </Button>
                </div>
            </div>
        </>
    );
};

export default JoinUs;
