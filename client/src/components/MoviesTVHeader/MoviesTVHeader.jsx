import React, { useContext } from "react";
import { GlobalContext } from "../../useContext/Context";

import { Typography } from "@mui/material";
import { MdOutlineCancel } from "react-icons/md";

const MoviesTVHeader = () => {
  const { handleInputChange, searchInput, setSearchInput } = useContext(GlobalContext);

  return (
    <>
      <div className="movieTVHeaderMain">
        <Typography variant="h4" className="movieTVheaderText">
          Discover the perfect film or tv show <br />
          with an effortless search and selection
        </Typography>
      </div>
      <div className="searchInputMain">
        <input
          placeholder="Search"
          type="text"
          value={searchInput}
          className="searchInput"
          onChange={handleInputChange}
        />
        {searchInput && <MdOutlineCancel size={20} className="cancel-icon" onClick={() => setSearchInput("")} />}
      </div>
    </>
  );
};

export default MoviesTVHeader;
