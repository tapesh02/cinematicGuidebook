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
      MuiCheckboxRoot: {
        styleOverrides: {
          root: {
            "&:disabled": {
              borderColor: "white",
              border: "1px solid white",
            },
            "&:checked": {
              borderColor: "white",
            },
          },
        },
      },

      MuiPaper: {
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
      MuiToggleButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              color: "#ed5e5e",
              backgroundColor: "#f9d1d1",
            },
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: "white",
          },
        },
      },
    },
  });
};

export default customTheme;
