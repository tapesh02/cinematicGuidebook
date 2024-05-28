import React, { useCallback, useEffect, useState } from "react";
import Spinner from "../assets/icons/Spinner.svg";
import ErrorImage from "../assets/icons/ErrorImage.svg";
import PropTypes from "prop-types";

const ImageComp = ({ src, className }) => {
  const [imgSrc, setImgSrc] = useState(Spinner || src);
  const [loaded, setLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setImgSrc(src);
    setLoaded(true);
  }, [src]);

  const onError = useCallback(() => {
    setImgSrc(ErrorImage || Spinner);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);
    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
  }, [src, onLoad, onError]);

  return !loaded ? <img className={className} alt="placeholder" src={Spinner} /> : <img alt={imgSrc} src={imgSrc} />;
};

ImageComp.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ImageComp;
