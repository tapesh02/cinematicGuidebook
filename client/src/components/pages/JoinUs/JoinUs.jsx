import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, TextField, Typography } from "@mui/material";
import { urlPath } from "../../../helpers/apiHelpers";
import { validatePassword, validateEmail, validateUsername } from "../../../helpers/helperFunctions";

const JoinUs = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const handleSignup = async () => {
    const URL = `${urlPath}/signup`;

    const reqBody = {
      username: userName,
      email: email,
      createPassword: password,
      retypePassword: password,
    };

    if (email && userName && password) {
      try {
        const response = await axios.post(URL, reqBody, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (response.status === 201) {
          sessionStorage.setItem("isAuthenticated", true);
          navigate("/movies");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (userName && email && password) {
      return setIsValid(!validateUsername(userName) || !validateEmail(email) || !validatePassword(password));
    }
  }, [userName, email, password]);

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
              disabled={isValid || !userName || !email || !password}
              variant="contained"
              color="primary"
              onClick={handleSignup}>
              Join Us
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default JoinUs;
