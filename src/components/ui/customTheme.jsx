import { createTheme } from "@mui/material/styles";

export const customTheme = () => {
    return createTheme({
        palette: {
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
                        borderColor: "#0D0D0D",
                        color: "inherit",
                    },
                },
            },
        },
    });
};

export default customTheme;
