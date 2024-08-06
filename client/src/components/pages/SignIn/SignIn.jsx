import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { fetchUsers, urlPath } from "../../../helpers/apiHelpers";
import { Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography, Alert } from "@mui/material";
import { setSessionStorage } from "../../../helpers/helperFunctions";

const SignIn = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignin = async (event) => {
    event?.preventDefault();
    const URL = `${urlPath}/signin`;

    const reqBody = {
      email: emailValue,
      createPassword: password,
    };

    if (emailValue && password) {
      try {
        const response = await axios.post(URL, reqBody, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (response.status === 200) {
          setSessionStorage("isAuthenticated", true);
          window.dispatchEvent(new Event("storage"));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const getUser = async () => {
        const user = await fetchUsers();
        setSessionStorage("username", user.username);
        setSessionStorage("email", user.email);
        setSessionStorage("phoneNumber", user.phoneNumber);
        setSessionStorage("country", user.country);
        setSessionStorage("genre", user.genre);

        const timeOut = setTimeout(() => {
          navigate("/movies");
        }, 3000);
        return () => clearTimeout(timeOut);
      };

      getUser();
    } else {
      console.log("not authenticated");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <div className="signinBgOverlay"></div>
      <div className="signinBg"></div>
      <form action="POST" onSubmit={handleSignin}>
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
          {isAuthenticated && (
            <Alert className="signin-alert-banner" variant="filled" severity="success">
              Sign in Successful
            </Alert>
          )}
          <div className="signinSection2">
            <TextField
              disabled={isAuthenticated}
              label="Email"
              type="email"
              autoComplete="false"
              required
              variant="filled"
              onChange={(event) => {
                setEmailValue(event.target.value);
              }}
            />
            <TextField
              disabled={isAuthenticated}
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
              disabled={emailValue?.length < 0 || !emailValue.includes("@") || password?.length < 0 || isAuthenticated}
              variant="contained"
              color="primary"
              type="submit">
              Sign In
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignIn;
