import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { fetchById } from "../../ApiHelpers";
import Carousel from "../Carousal/Carousal";
import { renderSkeleton } from "../Helpers/MovieTVHelpers";

const Likes = ({ item }) => {
  let location = useLocation();
  const pathName = location.pathname.split("/")[2];
  const itemId = location.pathname.split("/")[3];

  const [loading, setLoading] = useState(true);
  const [similarItems, setSimilarItems] = useState([]);

  useEffect(() => {
    const showSimilarItems = async () => {
      const _similarItems = await fetchById(`${pathName}`, `${itemId}`, "/recommendations");
      setSimilarItems(_similarItems.results);
      setLoading(false);
    };
    showSimilarItems();
  }, [pathName, itemId]);

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>{renderSkeleton(6)}</div>
      ) : (
        <div className="similar-items-card">
          <Carousel slides={similarItems} multiple className="likesCards" />
        </div>
      )}
    </>
  );
};

Likes.propTypes = {
  item: PropTypes.array.isRequired,
};

export default Likes;
