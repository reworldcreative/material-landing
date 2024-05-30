import { createTheme, Theme, responsiveFontSizes } from "@mui/material/styles";

// const containsWholeWord = (str: string, word: string) => {
//   const regex = new RegExp(`\\b${word}\\b`, "i");
//   return regex.test(str);
// };

const mainTypography = {
  fontSize: "16px",
  lineHeight: "1.625",
};

const subtitle1Typography = {
  ...mainTypography,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical" as "vertical",
};

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
      color: "#ffffff",
      fontSize: "40px",
      lineHeight: "1",
    },
    main: mainTypography,
    h2: {
      fontSize: "40px",
      lineHeight: "1",
      textAlign: "center",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    subtitle1: subtitle1Typography,
  },
  custom: {
    maxWidth: "1172px",
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "80px",
          padding: "0px 5px",
          minWidth: "100px",
          height: "34px",
          fontSize: "16px",
        },
      },

      variants: [
        {
          props: { variant: "contained", className: "more-button" },
          style: {
            display: "block",
            width: "120px",
            margin: "auto",
            textTransform: "none",
          },
        },
      ],
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
          ...(ovnerState.className?.includes("main__container") && {
            [theme.breakpoints.up("xs")]: {
              maxWidth: theme.custom.maxWidth,
              padding: "0px",
            },

            [theme.breakpoints.up("sm")]: {
              padding: "0px",
            },

            [theme.breakpoints.up("lg")]: {
              maxWidth: theme.custom.maxWidth,
            },
          }),

          ...(ovnerState.className?.includes("header__wrapper") && {
            alignItems: "center",
            justifyContent: "space-between",
            [theme.breakpoints.up("xs")]: {
              display: "flex",
            },
          }),

          ...(ovnerState.className === "flex-container" && {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0px",
            padding: "0px",
          }),

          ...(ovnerState.className === "flex-container header__container" && {
            width: "100%",
            [theme.breakpoints.up("xs")]: {
              display: "grid",
              gap: "10px",
              padding: "0px",
            },
            [theme.breakpoints.up("sm")]: {
              display: "flex",
            },
          }),

          ...(ovnerState.className === "hero" && {
            display: "block",
            [theme.breakpoints.up("xs")]: {
              maxWidth: theme.custom.maxWidth,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "73px 16px",
            },
            [theme.breakpoints.up("sm")]: {
              padding: "102px 16px",
            },
            [theme.breakpoints.up("md")]: {
              padding: "177px 16px",
            },
          }),

          ...(ovnerState.className === "hero__wrapper" && {
            [theme.breakpoints.up("xs")]: {
              textAlign: "center",
              maxWidth: "380px",
              padding: "0px",
            },
          }),

          ...(ovnerState.className?.includes("section") && {
            [theme.breakpoints.up("xs")]: {
              marginTop: "50px",
            },
            [theme.breakpoints.up("sm")]: {
              marginTop: "70px",
              padding: "0px 16px",
            },
          }),

          ...(ovnerState.className === "employee__container" && {
            [theme.breakpoints.up("sm")]: {
              padding: "0px",
            },
          }),
        }),
      },
    },

    MuiList: {
      styleOverrides: {
        root: () => ({
          padding: "0px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(282px, 1fr))",
          justifyContent: "space-between",
          alignItems: "stretch",
          gridAutoRows: "1fr",
          marginBottom: "50px",
          gap: "29px",
          [theme.breakpoints.up("xs")]: {
            gap: "20px",
          },
          [theme.breakpoints.up("sm")]: {
            gap: "16px",
          },
          [theme.breakpoints.up("md")]: {
            gap: "29px",
          },
        }),
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "0px",
          flexDirection: "column",
          justifyContent: "stretch",
          width: "100%",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          textAlign: "center",
          borderRadius: "10px",
          background: "#ffffff",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          height: "100%",
          width: "100%",
          "&:hover": {
            outline: "2px solid #000000",
          },
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "20px",
          display: "grid",
          gap: "20px",

          ":last-child": {
            paddingBottom: "20px",
          },
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: {
          margin: "auto",
          width: "70px",
          height: "70px",
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          display: "block",
          wordBreak: "break-word",
          overflowWrap: "break-word",

          "&:hover": {
            color: "blue",
          },
        },
      },
    },

    MuiTooltip: {
      defaultProps: {
        PopperProps: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -15],
              },
            },
          ],
        },
      },
      styleOverrides: {
        tooltip: {
          fontSize: "16px",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0, // для екранів до 400px
      sm: 450, // для екранів від 450px до 960px
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

  typography: {
    ...theme.typography,
    h2: {
      color: theme.palette.primary.light,
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

    MuiCard: {
      styleOverrides: {
        root: {
          background: "#ffffff",
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
  typography: {
    ...theme.typography,
    h2: {
      color: theme.palette.primary.dark,
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

    MuiCard: {
      styleOverrides: {
        root: {
          background: "#565656",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
