import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../useContext/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";

const SignIn = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(GlobalContext);

  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (event) => {
    event?.preventDefault();
    const URL =
      window.location.hostname === "localhost" ? "http://localhost:5000" : `${process.env.REACT_APP_API_URL}/signin`;
    if (email && password) {
      try {
        const response = await axios.post(
          URL,
          {
            email: email,
            createPassword: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(response);
        // navigate("/movies");
        // setIsLoggedIn(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

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
              disabled={email.length < 0 || !email.includes("@") || password.length < 0}
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
