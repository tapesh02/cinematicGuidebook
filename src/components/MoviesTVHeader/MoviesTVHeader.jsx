import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React, { useState } from "react";

const MoviesTVHeader = () => {
    const [alignment, setAlignment] = useState("Movies");

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
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
                <ToggleButtonGroup
                    className="mtvToogleBtns"
                    color="secondary"
                    value={alignment}
                    onChange={handleChange}
                    exclusive
                    aria-label="Platform">
                    <ToggleButton value="Movies" className="mtvToogleBtn">
                        {" "}
                        Movies
                    </ToggleButton>
                    <ToggleButton value="TV Shows" className="mtvToogleBtn">
                        TV Shows
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </>
    );
};

export default MoviesTVHeader;
