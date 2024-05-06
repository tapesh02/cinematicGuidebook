import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { fetchById } from "../../ApiHelpers";
import Cards from "../Cards/Cards";
import Carousel from "../Carousal/Carousal";

const Likes = ({ item }) => {
  let location = useLocation();
  const pathName = location.pathname.split("/")[2];
  const itemId = location.pathname.split("/")[3];

  const [similarItems, setSimilarItems] = useState([]);

  useEffect(() => {
    const showSimilarItems = async () => {
      const _similarItems = await fetchById(`${pathName}`, `${itemId}`, "/recommendations");
      setSimilarItems(_similarItems.results);
    };
    showSimilarItems();
  }, [pathName, itemId]);

  return (
    <div className="similar-items-card">
      <Carousel slides={similarItems} multiple />
    </div>
  );
};

Likes.propTypes = {
  item: PropTypes.array.isRequired,
};

export default Likes;
