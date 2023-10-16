import React from "react";
import "./App.scss";
import RouteLinks from "./RouteLinks";

import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./components/ui/customTheme";

const theme = customTheme();

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <RouteLinks />
            </ThemeProvider>
        </>
    );
};
export default App;
