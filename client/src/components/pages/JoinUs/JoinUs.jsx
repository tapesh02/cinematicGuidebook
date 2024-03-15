import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

const JoinUs = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    //only for fake validation on frontend
    const storeDetails = () => {
        localStorage.clear();
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("userName", userName);
        navigate("/signin");
    };

    return (
        <>
            <div className="signinBgOverlay"></div>
            <div className="signinBg"></div>
            <form>
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
                        <TextField
                            label="Username"
                            required
                            variant="filled"
                            onChange={(event) => setUserName(event.target.value)}
                        />
                        <TextField
                            label="Email"
                            required
                            variant="filled"
                            type="email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <TextField
                            label="Create Password"
                            required
                            type="password"
                            variant="filled"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className="signinSection4">
                        <Button
                            disabled={!userName || !email || !password}
                            variant="contained"
                            color="primary"
                            onClick={storeDetails}>
                            Join Us
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default JoinUs;
