import React from "react";
import "./App.scss";
import RouteLinks from "./RouteLinks";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import customTheme from "./components/ui/customTheme";
import ThemeTemplate from "./components/ui/ThemeTemplate";

const theme = customTheme();

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <ThemeTemplate />
                <RouteLinks />
            </ThemeProvider>
        </>
    );
};
export default App;
