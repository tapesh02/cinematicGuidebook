import { Typography } from "@mui/material";
import Carousel from "../Carousal/Carousal";

export const renderTopRated = (searchInput, topRated) =>
    !searchInput && (
        <>
            <Typography variant="h6">Top Rated</Typography>
            <Carousel slides={topRated} />
        </>
    );
