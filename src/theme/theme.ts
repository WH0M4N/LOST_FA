import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",

  palette: {
    mode: "dark",

    primary: {
      main: "#DFFF57",
      light: "#E9FF8A",
      dark: "#B5D63C",
      contrastText: "#0B100D",
    },

    secondary: {
      main: "#9FBE3F",
      light: "#B5CC70",
      dark: "#718A2E",
    },

    background: {
      default: "#0B100D",
      paper: "#121A14",
    },

    text: {
      primary: "#F2F4EA",
      secondary: "rgba(242,244,234,0.58)",
    },

    divider: "rgba(242,244,234,0.10)",
  },

  typography: {
    fontFamily: '"Vazirmatn", sans-serif',

    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 600,
    },

    h3: {
      fontWeight: 600,
    },

    body1: {
      lineHeight: 1.9,
    },

    body2: {
      lineHeight: 1.8,
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0B100D",
          scrollbarColor: "#526044 #0B100D",
        },

        "*": {
          boxSizing: "border-box",
        },

        "::selection": {
          backgroundColor: "#DFFF57",
          color: "#0B100D",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
