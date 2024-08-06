import { Button } from "@mui/material";
import { FiCamera } from "react-icons/fi";

import { getSessionStorage } from "../../../helpers/helperFunctions";

const Profile = () => {
  const username = getSessionStorage("username");
  const email = getSessionStorage("email");
  const phoneNumber = getSessionStorage("phoneNumber");
  const country = getSessionStorage("country");
  const genre = getSessionStorage("genre");

  return (
    <div className="main-profile-bg">
      <h1>Welcome {username}</h1>
      <p>Start editing your personal details, add genres to fine tune movie or tv show recommendations</p>

      <div className="profile-wrapper">
        <div className="profile-img">
          <img src={`https://eu.ui-avatars.com/api/?name=${username}&size=250`} alt="profile-img" />
          <span className="camera-icon">
            <FiCamera size={30} />
          </span>
        </div>
        <div className="profile-content-wrapper">
          <div className="profile-inputs-wrapper">
            <div className="profile-full-name">
              <label htmlFor="fullName">
                <input type="text" value={username}/>
                Full name
              </label>
            </div>
            <div className="profile-email">
              <label htmlFor="email">
                <input type="email" value={email} disabled/>
                Email
              </label>
            </div>
            <div className="profile-phone">
              <label htmlFor="phone">
                <input type="text" value={phoneNumber}/>
                Phone number
              </label>
            </div>
            <div className="profile-location">
              <label htmlFor="location">
                <input type="text" value={country}/>
                Country
              </label>
            </div>
            <div className="profile-genre">
              <label htmlFor="genre">
                <input type="text"  value={genre}/>
                Genre
              </label>
            </div>
          </div>
          <div className="profile-buttons">
            <Button variant="outlined" color="secondary">
              Cancel
            </Button>
            <Button variant="contained">Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
