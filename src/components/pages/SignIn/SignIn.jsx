import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../useContext/Context";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";

const SignIn = () => {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(GlobalContext);

    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const _email = localStorage.getItem("email");
    const _password = localStorage.getItem("password");

    //only for fake validation on frontend
    const storeDetails = () => {
        localStorage.setItem("email", "test123@test.com");
        localStorage.setItem("password", "123Test!");
    };

    const handleSignin = () => {
        if (_email === email && _password === password) {
            navigate("/");
            setIsLoggedIn(true);
        }
    };

    useEffect(() => {
        const hasCredentialSaved = _email && _password;
        if (hasCredentialSaved) return;
        storeDetails();
    }, [_email, _password]);

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
                        <TextField
                            label="Email"
                            type="email"
                            autoComplete="false"
                            required
                            variant="filled"
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            autoComplete="false"
                            required
                            variant="filled"
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
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
                        <Button
                            disabled={_email !== email || _password !== password}
                            variant="contained"
                            color="primary"
                            onClick={handleSignin}>
                            Sign In
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SignIn;
