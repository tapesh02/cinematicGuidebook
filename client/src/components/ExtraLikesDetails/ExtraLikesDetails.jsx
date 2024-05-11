import { useState } from "react";
import PropTypes from "prop-types";

import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Details from "./Details";
import Likes from "./Likes";

const ExtraLikesDetails = ({ item }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} aria-label="more tabs">
            <Tab label="You May Also Like" value="1" />
            <Tab label="Extras" value="2" />
            <Tab label="Details" value="3" />
          </TabList>
        </div>
        <TabPanel value="1">
          <Likes item={item} />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">
          <Details item={item} />
        </TabPanel>
      </TabContext>
    </div>
  );
};

ExtraLikesDetails.propTypes = {
  item: PropTypes.array.isRequired,
};

export default ExtraLikesDetails;
