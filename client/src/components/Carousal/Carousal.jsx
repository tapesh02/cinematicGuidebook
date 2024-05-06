import React, { useCallback, useState } from "react";

import { CircularProgress } from "@mui/material";
import { Button, Typography } from "@mui/material";

import { MdBookmarkAdd } from "react-icons/md";
import { IoMdShare, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";

const Carousel = ({ slides, multiple }) => {
  const [curIndex, setCurIndex] = useState(0);

  const itemsPerPage = multiple ? 6 : 1;

  const totalItems = slides.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const rightHandle = useCallback(() => {
    setCurIndex((prevIndex) => (prevIndex + 1) % totalPages);
  }, [totalPages]);

  const leftHandle = useCallback(() => {
    setCurIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  }, [totalPages]);

  return (
    <div className="carousal-container">
      {slides.length > 0 && (
        <>
          <IoIosArrowBack className="leftBtn" onClick={leftHandle} />
          <IoIosArrowForward className="rightBtn" onClick={rightHandle} />
        </>
      )}

      <div className="carousal-inner">
        <div>
          {slides?.slice(curIndex * itemsPerPage, (curIndex + 1) * itemsPerPage).map((slide) => {
            const { backdrop_path, id, original_title, original_name, overview, vote_average } = slide;
            const _overview = `${overview.slice(0, 120)}...`;
            return (
              <React.Fragment key={id}>
                <div className={!multiple ? "overlay-gradient" : ""}></div>

                <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="img" />

                {!multiple && (
                  <>
                    <Typography variant={multiple ? "body1" : "h4"} className="carousal-title">
                      {original_name || original_title}
                    </Typography>
                    <Typography variant="subtitle-1" className="carousal-subtitle">
                      {_overview}
                    </Typography>
                    <div className="carousel-buttons">
                      <Button variant="contained" color="primary">
                        Watch now
                      </Button>

                      <IoMdShare size={22} className="outlined-icon" />
                      <MdBookmarkAdd size={22} className="outlined-icon" />
                      <div className="circular-progress">
                        <CircularProgress
                          className="vote-progress"
                          variant="determinate"
                          value={vote_average * 10}
                          size={"3.5em"}
                        />
                        <Typography variant="subtitle-1" className="vote-progress-text">
                          {(vote_average * 10).toFixed()}
                        </Typography>
                      </div>
                    </div>
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Carousel.prototype = {
  slides: PropTypes.array,
};

export default Carousel;
