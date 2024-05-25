import { createTheme, Theme } from "@mui/material/styles";

// Базова тема
const theme = {
  typography: {
    fontFamily: "Nunito, sans-serif",
    h1: {
      fontSize: "40px",
    },
    main: {
      fontSize: "16px",
      lineHeight: "26px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "80px",
          padding: "4px 22px",
          minWidth: "100px",
        },
      },
    },
  },
};

// Світла тема
export const lightTheme: Theme = createTheme({
  ...theme,
  palette: {
    mode: "light",
    primary: {
      main: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: "#ffffff",
    },
    accent: {
      main: "#0E1F3D",
    },
    background: {
      default: "#f8f8f8",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          ...theme.components.MuiButton.styleOverrides.root,
          backgroundColor: "#0E1F3D",
          color: "#FAFAFA",
          "&:hover": {
            backgroundColor: "#FAFAFA",
            color: "#0E1F3D",
          },
        },
      },
    },
  },
});

// Темна тема
export const darkTheme: Theme = createTheme({
  ...theme,
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
    accent: {
      main: "#ffffff",
    },
    background: {
      default: "#565656",
    },
  },
  // breakpoints: {
  //   values: {

  //   }
  // },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          ...theme.components.MuiButton.styleOverrides.root,
          backgroundColor: "#01636F",
          color: "#FAFAFA",
          "&:hover": {
            backgroundColor: "#FAFAFA",
            color: "#01636F",
          },
        },
      },
    },
    // MuiAppBar: {

    // }
  },
});
