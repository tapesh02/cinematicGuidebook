import React from "react";

import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const Details = ({ item }) => {
  const convertToUsDollar = (currency) => {
    const _currency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      compactDisplay: "long",
    });
    return _currency.format(currency);
  };

  const convertLanguageCode = (language) => {
    const _language = new Intl.DisplayNames(["en"], {
      type: "language",
    });
    return _language.of(language);
  };

  const RenderProductionName = ({ productionName }) => {
    return productionName?.map((names) => (
      <Typography variant="body1" key={names.id}>
        {names.name}
      </Typography>
    ));
  };

  return (
    <>
      {item?.map((details) => {
        const {
          adult,
          budget,
          origin_country,
          original_language,
          vote_average,
          release_date,
          revenue,
          id,
          production_companies,
        } = details;
        return (
          <div className="details-section" key={id}>
            <Typography variant="body1">
              <span className="details-header">Origin country :</span> {origin_country}
            </Typography>
            <Typography variant="body1">
              <span className="details-header">Original language :</span>
              {convertLanguageCode(original_language)}
            </Typography>
            <Typography variant="body1">
              <span className="details-header">Rating :</span> {vote_average}
            </Typography>
            <Typography variant="body1">
              <span className="details-header">Release date :</span> {release_date}
            </Typography>
            <Typography variant="body1">
              <span className="details-header">Certified :</span> {adult ? "A" : "U/A"}
            </Typography>
            <Typography variant="body1">
              <span className="details-header">Budget :</span> {convertToUsDollar(budget)}
            </Typography>
            <Typography variant="body1">
              <span className="details-header">Revenue :</span> {convertToUsDollar(revenue)}
            </Typography>
            <div style={{ display: "flex" }}>
              <span className="details-header">Production House :</span>
              <RenderProductionName productionName={production_companies} />
            </div>
          </div>
        );
      })}
    </>
  );
};

Details.propTypes = {
  item: PropTypes.array.isRequired,
};

export default Details;
