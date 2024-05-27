import { createTheme, Theme, responsiveFontSizes } from "@mui/material/styles";

// Базова тема
const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 0, 0, 0.87)",
      light: "rgba(0, 0, 0, 0.87)",
      dark: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#000000",
    },
    accent: {
      main: "#0E1F3D",
      light: "#0E1F3D",
      dark: "#ffffff",
    },
  },
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
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: "13px 16px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          position: "relative",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ ownerState: ovnerState }) => ({
          ...(ovnerState.className === "header__wrapper" && {
            padding: "0px",
            maxWidth: "1172px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            [theme.breakpoints.up("xs")]: {
              maxWidth: "1172px",
              display: "flex",
              padding: "0px",
            },
          }),
          ...(ovnerState.className === "flex-container" && {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0px",
            [theme.breakpoints.up("xs")]: {
              padding: "0px",
            },
          }),
        }),
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0, // для екранів до 400px
      sm: 420, // для екранів від 420px до 960px
      md: 960, // для екранів від 960px до 1280px
      lg: 1200, // для екранів від 1200px до 1920px
      xl: 1920, // для екранів від 1920px і більше
    },
  },
});

// Світла тема
export const lightTheme: Theme = createTheme(theme, {
  palette: {
    mode: "light",
    primary: {
      main: theme.palette.primary.light,
    },
    secondary: {
      main: theme.palette.secondary.light,
    },
    accent: {
      main: theme.palette.accent.light,
    },
    background: {
      default: "#f8f8f8",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.accent.light,
          color: "#FAFAFA",
          "&:hover": {
            backgroundColor: "#FAFAFA",
            color: theme.palette.accent.light,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.secondary.light,
        },
      },
    },
  },
});

// Темна тема
export const darkTheme: Theme = createTheme(theme, {
  palette: {
    mode: "dark",
    primary: {
      main: theme.palette.primary.dark,
    },
    secondary: {
      main: theme.palette.secondary.dark,
    },
    accent: {
      main: theme.palette.accent.dark,
    },
    background: {
      default: "#565656",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#01636F",
          color: "#FAFAFA",
          "&:hover": {
            backgroundColor: "#FAFAFA",
            color: "#01636F",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.secondary.dark,
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
