import { createTheme } from "@mui/material";

const Colors = {
  primary: "#F1511B",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
  },
});

export default theme;
