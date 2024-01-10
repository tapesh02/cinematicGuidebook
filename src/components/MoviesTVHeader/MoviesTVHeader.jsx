import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { GlobalContext } from "../../useContext/Context";

const MoviesTVHeader = () => {
    const { handleInputChange, searchInput } = useContext(GlobalContext);

    return (
        <>
            <div className="movieTVHeaderMain">
                <Typography variant="h4" className="movieTVheaderText">
                    Discover the perfect film <br />
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
            </div>
        </>
    );
};

export default MoviesTVHeader;
