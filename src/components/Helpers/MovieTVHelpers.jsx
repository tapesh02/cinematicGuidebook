import { Skeleton, Typography } from "@mui/material";
import Carousel from "../Carousal/Carousal";

export const renderTopRated = (searchInput, topRated) =>
    !searchInput && (
        <>
            <Typography variant="h6">Top Rated</Typography>
            <Carousel slides={topRated} />
        </>
    );

export const renderSkeleton = (num) => {
    const skeletons = [];
    for (let i = 0; i < num; i++) {
        skeletons[i] = (
            <Skeleton
                key={i}
                animation="pulse"
                height={200}
                variant="rectangular"
                width={130}
                sx={{ animationDuration: "1.5s", borderRadius: "5px" }}
            />
        );
    }
    return skeletons;
};
