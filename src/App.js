import React from "react";
import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import customTheme from "./components/ui/customTheme";
import ThemeTemplate from "./components/ui/ThemeTemplate";

const theme = customTheme();

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <ThemeTemplate />
            </ThemeProvider>
        </>
    );
};
export default App;
