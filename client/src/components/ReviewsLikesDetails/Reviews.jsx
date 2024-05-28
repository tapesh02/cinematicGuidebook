import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchById } from "../../Helpers/ApiHelpers";
import { Button, Typography, Rating } from "@mui/material";
import { convertDate } from "../../Helpers/helperFunctions";

const Reviews = () => {
  const location = useLocation();
  const itemId = location.pathname.split("/")[3];
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const _reviews = await fetchById("movie", `${itemId}`, "/reviews");
      setReviews(_reviews.results);
    };
    getReviews();
  }, [itemId]);

  const RenderReviews = () => {
    return reviews.map((review) => {
      return (
        <div className="review-card-wrapper" key={review.id}>
          <div className="review-card-content-wrapper">
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              {convertDate(review.updated_at)}
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
              {review.author}
            </Typography>
            <Rating defaultValue={review.author_details.rating / 2} />
            <Typography variant="body2">{review.content.slice(0, 500)}... </Typography>
            <div className="read-more-button">
              <Button size="small" variant="outlined">
                Read More
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };

  return <RenderReviews />;
};

export default Reviews;
