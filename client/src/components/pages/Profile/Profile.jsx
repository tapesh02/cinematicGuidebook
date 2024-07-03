import { Button } from "@mui/material";
import { FiCamera } from "react-icons/fi";
import useFetchUser from "../../../useHooks/useFetchUser";

const Profile = () => {
  const { data } = useFetchUser();
  const { email, username } = data;
  return (
    <div className="main-profile-bg">
      <h1>Welcome {username}</h1>
      <p>Start editing your personal details, add genres to fine tune movie or tv show recommendations</p>

      <div className="profile-wrapper">
        <div className="profile-img">
          <img src="https://eu.ui-avatars.com/api/?name=Tapesh+Patel&size=250" alt="profile-img" />
          <span className="camera-icon">
            <FiCamera size={30} />
          </span>
        </div>
        <div className="profile-content-wrapper">
          <div className="profile-inputs-wrapper">
            <div className="profile-full-name">
              <label htmlFor="fullName">
                <input type="text" value={username} />
                Full name
              </label>
            </div>
            <div className="profile-email">
              <label htmlFor="email">
                <input type="email" value={email} />
                Email
              </label>
            </div>
            <div className="profile-phone">
              <label htmlFor="phone">
                <input type="text" />
                Phone number
              </label>
            </div>
            <div className="profile-location">
              <label htmlFor="location">
                <input type="text" />
                Location
              </label>
            </div>
            <div className="profile-genre">
              <label htmlFor="genre">
                <input type="text" />
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
