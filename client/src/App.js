import React from "react";
import "./App.scss";
import RouteLinks from "./RouteLinks";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./assets/theme/customTheme";

const theme = customTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouteLinks />
      <SpeedInsights />
    </ThemeProvider>
  );
};
export default App;
