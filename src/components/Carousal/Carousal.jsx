import React, { useCallback, useState } from "react";

import { CircularProgress } from "@mui/material";
import { Button, Typography } from "@mui/material";

import { MdBookmarkAdd } from "react-icons/md";
import { IoMdShare, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";

const Carousel = ({ slides }) => {
    const [curLength, setCurLength] = useState(0);

    const len = slides.length;

    const leftHandle = () => {
        setCurLength(curLength - 1 < 0 ? len - 1 : curLength - 1);
    };

    const rightHandle = useCallback(() => {
        setCurLength(curLength + 1 > len - 1 ? 0 : curLength + 1);
    }, [curLength, len]);

    return (
        <div className="carousal-container">
            <IoIosArrowBack className="leftBtn" onClick={leftHandle} />
            <IoIosArrowForward className="rightBtn" onClick={rightHandle} />
            <div className="carousal-inner">
                <div>
                    {slides?.map((slide, index) => {
                        const { backdrop_path, id, original_title, original_name, overview, vote_average } = slide;
                        const _overview = `${overview.slice(0, 120)}...`;
                        return (
                            curLength === index && (
                                <React.Fragment key={id}>
                                    <div className="overlay-gradient"></div>
                                    <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="img" />
                                    <Typography variant="h4" className="carousal-title">
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
                                </React.Fragment>
                            )
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
