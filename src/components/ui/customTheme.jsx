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
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundColor: "black",
                    },
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#ffff",
                        color: "#000000",
                        height: "3em",
                        borderRadius: "7px",
                        "&:hover": {
                            "& label.MuiInputLabel-shrink:not(.Mui-error)": {
                                color: "#000000",
                                borderColor: "#000000",
                            },
                        },
                        "& div:not(.Mui-error) > fieldset": {
                            borderColor: "transparent",
                        },
                    },
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    input: {
                        color: "#000000",
                    },
                },
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        "&.Mui-focused": {
                            color: "#000000",
                        },
                    },
                },
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: "transparent",
                    },
                },
            },
        },
    });
};

export default customTheme;
