import React from "react";
import PropTypes from "prop-types";

import imageNotFound from "../../assets/images/imageNotFound.png";
import { Link } from "react-router-dom";
import ImageComp from "../../Helpers/ImageComp";

const Cards = (props) => {
  const { cardImage, id, type } = props;

  return (
    <Link key={id} className="card" to={`${type}/${id}`}>
      <ImageComp
        className="cardImg"
        src={cardImage ? `https://image.tmdb.org/t/p/original/${cardImage}` : imageNotFound}
        alt="card-image"
      />
    </Link>
  );
};

Cards.propTypes = {
  cardImage: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string,
};

export default Cards;
