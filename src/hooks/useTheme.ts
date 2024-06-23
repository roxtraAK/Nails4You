import { createTheme, Theme } from "@mui/material/styles";

export default function useTheme(): Theme {
  const theme = createTheme({
    palette: {
      primary: {
        // black
        light: "#000000",
        main: "#000000",
        dark: "#000000",
        contrastText: "#000000",
      },
      secondary: {
        // red
        light: "#df1010",
        main: "#df1010",
        dark: "#df1010",
        contrastText: "#df1010",
      },
    },
  });

  return theme;
}
