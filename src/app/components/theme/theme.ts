import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    "2xl": true; // 追加するブレークポイント
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
  typography: {
    fontFamily: ["kinto-sans, sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#93CA88",
      light: "#B0F2A3",
      dark: "#75A16D",
    },
  },
});
