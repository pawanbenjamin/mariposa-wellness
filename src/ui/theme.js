import { createMuiTheme } from "@material-ui/core/styles";

const green = "#B3C0A4";
const purple = "#AB92BF";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${green}`,
      orange: `${purple}`,
    },
    primary: {
      main: `${green}`,
    },
    secondary: {
      main: `${purple}`,
    },
  },

  typography: {
    fontFamily: "Newsreader, serif",
    tab: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "1rem",
      textDecoration: "none",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
    },
  },
});
