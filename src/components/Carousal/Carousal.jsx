import { Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";

const Carousel = ({ slides }) => {
    const [curLength, setCurLength] = useState(0);

    const len = slides.length;

    const leftHandle = () => {
        setCurLength(curLength - 1 < 0 ? len - 1 : curLength - 1);
    };

    const rightHandle = useCallback(() => {
        setCurLength(curLength + 1 > len - 1 ? 0 : curLength + 1);
    }, [curLength, len]);

    useEffect(() => {
        const interval = setTimeout(() => {
            rightHandle();
        }, 8000);
        return () => clearTimeout(interval);
    }, [rightHandle, curLength]);

    return (
        <div className="carousal-container">
            <IoIosArrowBack className="leftBtn" onClick={leftHandle} />
            <IoIosArrowForward className="rightBtn" onClick={rightHandle} />
            <div className="carousal-inner">
                <div>
                    {slides?.map((slide, index) => {
                        const { backdrop_path, id, original_title, original_name, overview, vote_average } = slide;
                        const isActive = curLength === index;
                        const _overview = `${overview.slice(0, 190)}...`;
                        return (
                            curLength === index && (
                                <>
                                    <img
                                        key={id}
                                        className={` ${isActive ? "active" : ""}`}
                                        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                                        alt="img"
                                    />
                                    <Typography variant="h4" className={`carousal-title ${isActive ? "active" : ""}`}>
                                        {original_name || original_title}
                                    </Typography>
                                    <Typography
                                        variant="subtitle-1"
                                        className={`carousal-subtitle ${isActive ? "active" : ""}`}>
                                        {_overview}
                                    </Typography>
                                    <CircularProgress
                                        className={`vote-progress ${isActive ? "active" : ""}`}
                                        variant="determinate"
                                        value={vote_average * 10}
                                        size={"4em"}
                                    />
                                    <Typography
                                        variant="subtitle-1"
                                        className={`vote-progress-text ${isActive ? "active" : ""}`}>
                                        {(vote_average * 10).toFixed() + "%"}
                                    </Typography>
                                </>
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
