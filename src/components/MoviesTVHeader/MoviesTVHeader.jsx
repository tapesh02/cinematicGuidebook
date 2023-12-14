import { Typography } from "@mui/material";
import React from "react";

const MoviesTVHeader = () => {
    return (
        <>
            <div className="movieTVHeaderMain">
                <Typography variant="h4" className="movieTVheaderText">
                    Discover the perfect film <br />
                    with an effortless search and selection
                </Typography>
            </div>
            <div className="searchInputMain">
                <input placeholder="Search" className="searchInput" />
            </div>
        </>
    );
};

export default MoviesTVHeader;
