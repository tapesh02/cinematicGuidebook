import React, { useEffect, useState } from "react";
import { fetchById } from "../../Helpers/ApiHelpers";
import { useParams, useLocation } from "react-router-dom";

import imageNotFound from "../../assets/images/imageNotFound.png";

import { IoMdAdd } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { BsBadge4K } from "react-icons/bs";
import { MdOutlineHd } from "react-icons/md";
import { SiDolby } from "react-icons/si";

import { Button, Card, CardMedia, Typography } from "@mui/material";
import ReviewsLikesDetails from "../ReviewsLikesDetails/ReviewsLikesDetails";

const ItemDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const searchQuery = location.pathname.split("/")[2];

  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const _item = await fetchById(searchQuery, id);
      setItem([_item]);
    };
    fetchItem();
  }, [id, searchQuery]);

  const RenderItemDetails = () =>
    item?.map((_item) => {
      const { backdrop_path, original_title, overview, runtime, original_name } = _item;
      return (
        <div key={_item.id} className="item-card">
          <div className="item-card-overlay"></div>
          <Card className="item-card-img">
            <CardMedia
              component="img"
              image={backdrop_path ? `https://image.tmdb.org/t/p/original/${backdrop_path}` : imageNotFound}
              alt="card-image"
              loading="lazy"
            />
          </Card>
          <div className="item-details">
            <h4 className="item-title">{original_title || original_name}</h4>
            <div className="resolution-icons">
              <SiDolby size={22} className="item-icons" />
              <BsBadge4K size={22} className="item-icons" />
              <MdOutlineHd size={22} className="item-icons" />
              <Typography variant="subtitle2">{runtime} mins</Typography>
            </div>
            <Typography variant="subtitle2">{overview}</Typography>
            <Button className="watch-button" variant="contained" color="primary">
              <span>
                <FaPlay />
              </span>{" "}
              Watch now
            </Button>
            <Button className="watch-button" variant="outlined" color="secondary">
              <span>
                <IoMdAdd />
              </span>{" "}
              Watchlist
            </Button>
          </div>
        </div>
      );
    });

  return (
    <div>
      <RenderItemDetails />
      <ReviewsLikesDetails item={item} />
    </div>
  );
};

export default ItemDetails;
