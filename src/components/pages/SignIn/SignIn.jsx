import React, { useEffect, useState } from "react";
import { Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";

const SignIn = () => {
    const [isChecked, setIsChecked] = useState(false);
    useEffect(() => {
        console.log(isChecked);
    }, [isChecked]);
    return (
        <>
            <div className="signinBgOverlay"></div>
            <div className="signinBg"></div>
            <div className="headerSection">
                <Typography variant="h4" className="header">
                    Unlock a world of endless entertainment
                </Typography>
                <Typography variant="h6" className="subheader">
                    Login to Discover, Stream and Enjoy!
                </Typography>
            </div>
            <div className="signinSections">
                <div className="signinSection1">
                    <Typography variant="subtitle1" className="fromTitle">
                        Sign In
                    </Typography>
                </div>
                <div className="signinSection2">
                    <TextField label="Email" variant="filled" />
                    <TextField label="Password" variant="filled" />
                </div>
                <div className="signinSection3">
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    className={!isChecked ? "checkbox" : ""}
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                />
                            }
                            label="Remember me"
                        />
                    </FormGroup>
                    <Typography variant="body1" className="body1">
                        Forget password?
                    </Typography>
                </div>
                <div className="signinSection4">
                    <Button variant="contained" color="primary">
                        Sign In
                    </Button>
                </div>
            </div>
        </>
    );
};

export default SignIn;
