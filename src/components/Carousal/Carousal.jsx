import { Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
                    {slides.map((slide, index) => {
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
                                </>
                            )
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
