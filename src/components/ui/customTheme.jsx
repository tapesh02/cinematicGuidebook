import { createTheme } from "@mui/material/styles";

export const customTheme = () => {
    return createTheme({
        palette: {
            text: {
                primary: "#ffff",
            },
            primary: {
                main: "#DD0707",
            },
            secondary: {
                main: "#F2F2F2",
            },
        },
        typography: {
            fontFamily: "Montserrat, sans-serif",
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    outlinedSecondary: {
                        borderColor: "transparent",
                        color: "white",
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        boxShadow: "none",
                    },
                },
            },
        },
    });
};

export default customTheme;
