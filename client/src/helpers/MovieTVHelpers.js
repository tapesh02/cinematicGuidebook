import { Skeleton, Typography } from "@mui/material";
import Carousel from "../components/Carousal/Carousal";
import Cards from "../components/Cards/Cards";
import PropTypes from "prop-types";

export const renderTopRated = (searchInput, topRated) =>
  !searchInput && (
    <>
      <Typography variant="h6">Top Rated</Typography>
      <Carousel slides={topRated} className="topRatedCards" />
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

export const RenderItems = ({ items, type }) => (
  <div className="cardMain">
    {items?.map((item) => {
      const { poster_path, id } = item;
      return <Cards key={id} cardImage={poster_path} id={id} type={type} />;
    })}
  </div>
);

RenderItems.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};
